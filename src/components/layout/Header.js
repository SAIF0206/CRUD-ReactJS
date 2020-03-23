import React from "react";
//Validation on Property
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

//function Header()   --Normal Function Converted to ARROW FUNCTION.
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i>Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/test" className="nav-link">
                <i className="fab fa-angellist"></i> Test
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

//Deafult props
Header.defaultProps = {
  branding: "My App"
};

//Validation
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
