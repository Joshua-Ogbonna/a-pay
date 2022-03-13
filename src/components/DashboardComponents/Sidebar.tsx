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
        <ul className="sidebar__menu">
          <li className="sidebar__item active__item">
            <i className="fa-solid fa-grip"></i> Dashboard
          </li>
          <li className="sidebar__item">
            <i className="fa-solid fa-wallet"></i> Accounts
          </li>
          <li className="sidebar__item">
            <i className="fa-solid fa-clipboard-list"></i> Transactions
          </li>
          <li className="sidebar__item">
            <i className="fa-solid fa-clipboard-check"></i> Approvals
          </li>
          <li className="sidebar__item">
            <i className="fa-solid fa-bullhorn"></i> Vendor
          </li>
          <li className="sidebar__item">
            <i className="fa-solid fa-arrows-rotate"></i> Transfer Funds
          </li>
          <li className="sidebar__item">
            <i className="fa-solid fa-circle-arrow-left"></i> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
