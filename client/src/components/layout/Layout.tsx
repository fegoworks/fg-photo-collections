import "./Layout.css";

import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "..";

function Layout() {
  const navigate = useNavigate();
  return (
    <div className="Layout">
      <nav>
        <h1 onClick={() => navigate("/")}>Gallery</h1>
        <Button text="Upload image" type="link" to="/upload" />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
