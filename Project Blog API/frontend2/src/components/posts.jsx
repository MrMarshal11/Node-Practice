import { useState, useEffect } from "react";
import "../styles/posts.css";

function Posts() {
  const username = localStorage.getItem("username");

  const [loading, setLoading] = useState(false); // Loading state

  // Get posts from the db for the specific user
  const [posts, setPosts] = useState("");

  async function displayPosts() {
    try {
      setLoading(true); // Show loading screen
      const response = await fetch(
        `http://localhost:8000/userPosts?username=${username}`,
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

  // Delete post functionality
  const handleDelete = async (e) => {
    e.preventDefault();

    const postId = e.target.value;

    try {
      const response = await fetch(
        `http://localhost:8000/deletePost?postId=${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Delete successful!");
        displayPosts();
      } else {
        alert(`Something went wrong in fetch(deletePost)`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong in fetch(deletePost) here");
    }
  };

  return (
    <div className="postDivs">
      {loading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : posts.length > 0 ? (
        <>
          <h1>Your Published Posts:</h1>
          {posts.map((post, index) => (
            <div className="post" key={index}>
              <h2>{post.title}</h2>
              <div className="temporaryImg">{post.description}</div>
              <h4>
                By {post.name}, {post.uploadedAt}
              </h4>
              <div className="buttons">
                <button type="button">Edit</button>{" "}
                {/* Inputs containing current values replace position & Republish button */}
                <button type="button" onClick={handleDelete} value={post.id}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="post">
            <h4>No Posts?</h4>
          </div>
        </>
      )}
    </div>
  );
}

export default Posts;
