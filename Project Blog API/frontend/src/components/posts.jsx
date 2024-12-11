import { useState, useEffect } from "react";
import "../styles/posts.css";

function Posts() {
  const [posts, setPosts] = useState("");

  // get posts from the db (get request), then display it here prob with a map.
  async function displayPosts() {
    try {
      const response = await fetch("http://localhost:8000/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  }

  // When component mounts, display posts.
  useEffect(() => {
    displayPosts();
  }, []);

  return (
    <div className="postDivs">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div className="post" key={index}>
            <h2>{post.title}</h2>
            <div className="temporaryImg">{post.description}</div>
            <h4>
              By {post.name}, {post.uploadedAt}
            </h4>
          </div>
        ))
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
