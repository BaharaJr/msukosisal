import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight, FaPhone, FaWhatsapp } from "react-icons/fa";
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
            <li className="icons">
              <a href="tel:+25571177224">
                <FaPhone className="nav-icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+25571177224">
                <FaWhatsapp className="nav-icon" />
              </a>
            </li>
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
