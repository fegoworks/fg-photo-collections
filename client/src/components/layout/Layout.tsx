import "./Layout.css";

import { Link, Outlet } from "react-router-dom";
import { Button } from "..";

function Layout() {
  return (
    <div className="Layout">
      <nav>
        <Link to="/">
          <h1>Gallery</h1>
        </Link>
        <Button text="Upload image" type="link" to="/upload" />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
