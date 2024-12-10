function SignIn() {
  return (
    <>
      <form action="/signIn" method="POST">
        <fieldset>
          <label>
            Username:
            <input id="username" name="username" type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            First Name:
            <input id="firstName" name="firstName" type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Last Name:
            <input id="lastName" name="lastName" type="text" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Password:
            <input id="password" name="password" type="password" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Confirm Password:
            <input id="password" name="confirmPassword" type="password" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SignIn;
