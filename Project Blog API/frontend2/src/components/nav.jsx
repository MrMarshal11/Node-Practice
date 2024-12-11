import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <div className="navLeft">
        <Link to="/">
          <img src="react.svg" alt="Blog Logo" />
        </Link>
        <h2>
          <Link to="/">BloggoAuthor.com</Link>
        </h2>
      </div>

      <div className="navRight">
        <h2>
          <Link to="/login">Login</Link>
        </h2>
        <h2>
          <Link to="/signIn">Sign in</Link>
        </h2>
      </div>
    </nav>
  );
}

export default Nav;
