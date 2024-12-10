import "../styles/posts.css";

function VisitorMessage() {
  const token = localStorage.getItem("accessToken");

  function isLoggedIn() {
    if (!token) {
      return <h2>Sign In To Create Posts!</h2>;
    }
  }

  return <div className="visitorMessage">{isLoggedIn()}</div>;
}

export default VisitorMessage;
