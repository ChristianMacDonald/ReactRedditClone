import { useState } from "react";
import classNames from "classnames";
import "./Header.css";

function Header(props) {
  let [showFeedsDropdown, setShowFeedsDropdown] = useState(false);

  let toggleFeedsDropdown = () => {
    setShowFeedsDropdown(!showFeedsDropdown);
  };

  return (
    <header className="header">
      <h1 className="app-name">Ribbit</h1>
      <div className="feeds-dropdown-menu">
        <button onClick={toggleFeedsDropdown}>Feeds</button>
        <nav className={classNames("feeds-dropdown-content", { "show": showFeedsDropdown })}>
          <a>Main</a>
          <a>Main</a>
          <a>Main</a>
          <a>Main</a>
          <a>Main</a>
        </nav>
      </div>
      <input type="text" placeholder="Search..."/>
      <button className="login-button">Login</button>
    </header>
  );
}

export default Header;