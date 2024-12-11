import ErrorPage from "./ErrorPage";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
