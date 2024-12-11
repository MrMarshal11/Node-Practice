import { useState, useEffect } from "react";
import "../styles/posts.css";

function Posts() {
  // Get posts from the db
  const [posts, setPosts] = useState("");

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
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  }

  // When component mounts, display posts.
  useEffect(() => {
    displayPosts();
  }, []);

  // New comment functionality...
  const [showForm, setShowForm] = useState({});
  const [formData, setFormData] = useState({});

  const handleChange = (postId, e) => {
    setFormData((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleSubmit = async (e, postId) => {
    e.preventDefault();

    const currentFormData = formData[postId];
    if (!currentFormData) return;

    try {
      const response = await fetch("http://localhost:8000/newComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Comment submitted successfully!");
        setFormData((prev) => ({
          ...prev,
          [postId]: { name: "", comment: "" },
        }));
        setShowForm((prev) => ({ ...prev, [postId]: false })); // Hide form after submission
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment", error);
    }
  };

  const toggleForm = (postId) => {
    setShowForm((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

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
            {/* Comment form functionality (could make it a separate component) */}
            <button type="button" onClick={() => toggleForm(post.id)}>
              Comment?
            </button>
            {showForm[post.id] && (
              <form onSubmit={(e) => handleSubmit(e, post.id)}>
                <fieldset>
                  <label>
                    Name:
                    <input
                      id={`name-${post.id}`}
                      name="name"
                      type="text"
                      onChange={(e) => handleChange(post.id, e)}
                      value={formData[post.id]?.name || ""}
                    />
                  </label>
                </fieldset>
                <fieldset>
                  <label>
                    Comment:
                    <input
                      id={`comment-${post.id}`}
                      name="comment"
                      type="text"
                      onChange={(e) => handleChange(post.id, e)}
                      value={formData[post.id]?.comment || ""}
                      required
                    />
                  </label>
                </fieldset>
                <input
                  id="postId"
                  name="postId"
                  type="hidden"
                  value={post.id}
                  onChange={handleChange}
                />
                <button type="submit">Submit Comment</button>
              </form>
            )}
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
