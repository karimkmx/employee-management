import React from "react"
import { Link } from "react-router-dom";

const Header = () => {

return (

<header>
          <nav>
            <div className="logo">
              <Link to="/">Employee Management</Link>
            </div>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <span></span>
            </label>
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employees">Employees</Link>
              </li>
            </ul>
          </nav>
        </header>
);
};

export default Header;