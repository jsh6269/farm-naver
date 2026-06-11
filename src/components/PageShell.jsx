import Sidebar from "./Sidebar";

/** 사이드바(w-[145px] + 좌우 여백)와 동일한 고정 폭 */
const SIDEBAR_COL = "w-[177px]";

export default function PageShell({ bgClassName, contentClassName = "", breadcrumb, children }) {
  return (
    <div className={`${bgClassName} rounded-2xl flex items-start`}>
      <aside className={`mt-1 shrink-0 grow-0 font-gulim ${SIDEBAR_COL}`}>
        <nav className="text-[12px] text-start ml-5 whitespace-nowrap">
          {breadcrumb}
        </nav>
        <Sidebar />
      </aside>
      <div className={`shrink-0 ${contentClassName}`}>{children}</div>
    </div>
  );
}
