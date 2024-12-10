import "../styles/postForm.css";

function Login() {
  return (
    <form action="/login" method="POST" className="postForm">
      <h1>Login</h1>

      <fieldset>
        <label>
          Username:
          <input id="username" name="username" type="text" />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Password:
          <input id="password" name="password" type="password" />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
