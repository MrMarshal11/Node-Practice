function Login() {
  return (
    <form action="/login" method="POST">
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
