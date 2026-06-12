import { execSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { platform, tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(tmpdir(), "farm-vite-dist");
const workDir = join(tmpdir(), "farm-gh-pages-deploy");

function run(cmd, cwd = workDir) {
  execSync(cmd, { cwd, stdio: "inherit", shell: true });
}

function runQuiet(cmd, cwd = workDir) {
  return execSync(cmd, { cwd, encoding: "utf8", shell: true }).trim();
}

function copyDist(src, dest) {
  if (platform() === "win32") {
    try {
      execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /nc /ns /np`, {
        cwd: dest,
        stdio: "inherit",
        shell: true,
      });
    } catch (error) {
      if (error.status == null || error.status > 7) throw error;
    }
    return;
  }
  execSync(`cp -R "${src}/." "${dest}/"`, { shell: true });
}

console.log("빌드 중... (OneDrive 경로 이슈 회피를 위해 임시 폴더 사용)");
if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}
run(`npx vite build --outDir "${dist}"`, root);

if (!existsSync(join(dist, "index.html"))) {
  console.error("빌드 실패: dist/index.html 이 없습니다.");
  process.exit(1);
}

const remoteUrl = execSync("git remote get-url origin", { cwd: root, encoding: "utf8" }).trim();

mkdirSync(workDir, { recursive: true });

console.log("gh-pages 브랜치 준비 중...");
if (existsSync(join(workDir, ".git"))) {
  run("git fetch origin gh-pages");
  run("git checkout gh-pages");
  run("git reset --hard origin/gh-pages");
} else {
  run(`git clone --depth 1 --branch gh-pages "${remoteUrl}" .`);
}

try {
  run("git rm -rf .");
} catch {
  // empty branch
}
run("git clean -fdx");

console.log("dist 복사 중...");
copyDist(dist, workDir);
writeFileSync(join(workDir, ".nojekyll"), "");

console.log("커밋 및 푸시 중...");
run("git add -A");

const status = runQuiet("git status --porcelain");
if (!status) {
  console.log("변경 사항 없음. 배포를 건너뜁니다.");
  process.exit(0);
}

run('git commit -m "Deploy"');
run("git push origin gh-pages");

console.log("배포 완료: https://jsh6269.github.io/farm-naver/");
