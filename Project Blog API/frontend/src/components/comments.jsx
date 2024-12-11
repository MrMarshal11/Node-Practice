import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Comments() {
  const location = useLocation();
  const { postId, postUploadedAt, postName, postTitle, postDescription } =
    location.state || {}; // Safely extract postId from state

  // Get comments from the db
  const [comments, setComments] = useState([]);

  async function displayComments() {
    try {
      const response = await fetch(
        `http://localhost:8000/comments?postId=${postId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          // send postId
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  }

  // When component mounts, display posts & comments.
  useEffect(() => {
    displayComments();
  }, []);

  return (
    <div>
      <div className="post">
        <h2>{postTitle}</h2>
        <div className="temporaryImg">{postDescription}</div>
        <h4>
          By {postName}, {postUploadedAt}
        </h4>
      </div>

      <div className="comments">
        <h2>Comments:</h2>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <h2>{comment.name || "Anonymous"}</h2>
            <h4 className="temporaryImg">{comment.description}</h4>
          </div>
        ))}

        {/* map all the comments here */}
      </div>
    </div>
  );
}

export default Comments;
