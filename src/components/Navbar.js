import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Msuko Sisal" width="40" height="40" />
              <span className="msuko">Msuko Sisal</span>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Gallery">Products</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <div className="icons">
            <li>
              <a href="mailto:info@msukosisal.co.tz">
                <FaEnvelope className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="tel:+255711770224">
                <FaPhone className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/255711770224?text=Welcome%20to%20Msuko Sisal.%20How%20may%20we%20help?%20">
                <FaWhatsapp className="nav-icon" />
              </a>
            </li>
            </div>
            {/* <li>
              <a href="tel:+25571177224">
                <FaPhone className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="tel:+25571177224">
                <FaPhone className="nav-icon" />
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
