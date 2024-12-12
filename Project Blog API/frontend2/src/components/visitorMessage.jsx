import Login from "./login";
import Posts from "./posts";
import UnpublishedPosts from "./unpublishedPosts";
import "../styles/posts.css";

function VisitorMessage() {
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  function isLoggedIn() {
    if (!token) {
      return <Login />;
    } else {
      return (
        <>
          <h2 className="visitorMessage">Welcome Back {username}</h2>
          <Posts />

          <UnpublishedPosts />
        </>
      );
    }
  }

  return isLoggedIn();
}

export default VisitorMessage;
