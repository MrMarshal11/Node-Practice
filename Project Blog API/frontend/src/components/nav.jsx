import { Link, useNavigate } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  function isLoggedIn() {
    if (!token) {
      return (
        <>
          <h2>
            <Link to="/login">Login</Link>
          </h2>
          <h2>
            <Link to="/signIn">Sign in</Link>
          </h2>
        </>
      );
    } else {
      return (
        <>
          <h2>
            <Link to="/newPost">New Post</Link>
          </h2>
          <h2>
            <a onClick={logout} style={{ cursor: "pointer" }}>
              Logout
            </a>
          </h2>
        </>
      );
    }
  }

  return (
    <nav>
      <div className="navLeft">
        <Link to="/">
          <img src="react.svg" alt="Blog Logo" />
        </Link>
        <h2>
          <Link to="/">Bloggo.com</Link>
        </h2>
      </div>

      <div className="navRight">{isLoggedIn()}</div>
    </nav>
  );
}

export default Nav;
