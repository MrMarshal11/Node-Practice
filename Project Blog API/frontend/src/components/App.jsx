import { Outlet, useLocation } from "react-router-dom";
import Nav from "./nav";
import Posts from "./posts";

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <Outlet />
      {location.pathname === "/" && <Posts />}
    </>
  );
}

export default App;
