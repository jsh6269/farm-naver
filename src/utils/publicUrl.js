/** public/ 폴더 에셋 URL (GitHub Pages base 경로 반영) */
export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
