import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        Test Taking Application
      </Link>
      <hr className="divider" />
    </div>
  );
}

export default Header;
