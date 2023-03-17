import { useState } from "react";
import classNames from "classnames";

import { FeedsHeaderDropdownNav, LoginModal } from '.';

import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  let [showFeedsHeaderDropdownNav, setShowFeedsHeaderDropdownNav] = useState(false);

  let toggleFeedsHeaderDropdownNav = () => {
    setShowFeedsHeaderDropdownNav(!showFeedsHeaderDropdownNav);
  };

  let [showLoginModal, setShowLoginModal] = useState(false);

  let toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  }

  return (
    <header className="header">
      <Link to="" className="app-name">Ribbit</Link>
      <div className="feeds-dropdown-menu">
        <button onClick={toggleFeedsHeaderDropdownNav}>Feeds</button>
        {showFeedsHeaderDropdownNav ? <FeedsHeaderDropdownNav toggle={toggleFeedsHeaderDropdownNav}/> : null}
      </div>
      <input type="text" placeholder="Search..."/>
      <button className="login-button" onClick={toggleLoginModal}>Login</button>
      {showLoginModal ? <LoginModal toggle={toggleLoginModal}/> : null}
    </header>
  );
}

export default Header;