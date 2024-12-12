import { useState, useEffect } from "react";
import "../styles/posts.css";

function UnpublishedPosts() {
  const username = localStorage.getItem("username");

  const [loading, setLoading] = useState(false); // Loading state

  // Get posts from the db for the specific user
  const [posts, setPosts] = useState("");

  async function displayPosts() {
    try {
      setLoading(true); // Show loading screen
      const response = await fetch(
        `http://localhost:8000/userUnpublishedPosts?username=${username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  }

  // When component mounts, display posts & comments.
  useEffect(() => {
    displayPosts();
  }, []);

  return (
    <div className="unpublishedPostDivs">
      {loading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : posts.length > 0 ? (
        <>
          <h1>Your Unpublished Posts:</h1>
          {posts.map((post, index) => (
            <div className="unpublishedPost" key={index}>
              <h2>{post.title}</h2>
              <div className="temporaryImg">{post.description}</div>
              <h4>
                By {post.name}, {post.uploadedAt}
              </h4>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="unpublishedPost">
            <h4>No Unpublished Posts?</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default UnpublishedPosts;
