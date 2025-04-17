import logo_farm from "../../assets/common/logo_farm.gif";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <div className="mt-2 mb-2">
      <Link to="/">
        <img
          src={logo_farm}
          className={`w-[390px] ${isRoot ? "mr-[420px]" : "ml-auto"}`}
          alt="title"
        />
      </Link>
    </div>
  );
};

export default Header;
