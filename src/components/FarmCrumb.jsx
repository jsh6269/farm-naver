import { Link } from "react-router-dom";

export function FarmCrumb() {
  return (
    <a href="/" className="text-blue-700">
      동물농장
    </a>
  );
}

export function CrumbSep() {
  return <>&nbsp; &gt; &nbsp;</>;
}

export function CrumbLink({ to, children }) {
  return (
    <Link to={to} className="text-blue-700">
      {children}
    </Link>
  );
}
