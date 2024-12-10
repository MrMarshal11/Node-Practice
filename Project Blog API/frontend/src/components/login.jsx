import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../styles/postForm.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Login successful!");
        navigate("/");
      } else {
        alert(`Login failed`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while signing up.");
    }
  };

  return (
    <form
      action="/login"
      method="POST"
      className="postForm"
      onSubmit={handleSubmit}
    >
      <h1>Login</h1>

      <fieldset>
        <label>
          Username:
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            value={formData.username}
            required
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Password:
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
