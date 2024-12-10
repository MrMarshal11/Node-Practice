import ErrorPage from "./ErrorPage";
import Login from "./login";
import SignIn from "./signIn";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signIn", element: <SignIn /> },
    ],
  },
];

export default routes;
