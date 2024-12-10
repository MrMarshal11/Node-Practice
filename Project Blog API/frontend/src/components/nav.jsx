import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <div className="navLeft">
        <img src="react.svg" alt="Blog Logo" />
        <h2>Bloggo.com</h2>
      </div>

      <div className="navRight">
        <h2>Login</h2>
        <h2>Sign in</h2>
      </div>
    </nav>
  );
}

export default Nav;
