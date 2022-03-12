import React from "react";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="company__logo">
        <Logo className="company__brand" />
        <hr />
      </div>

      <div className="sidebar__links">
        <ul>
            <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
