import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="inner">
          <h2>Get In Touch</h2>
          <ul class="actions">
            <li>
              <span className="icon fa-phone"></span>
              <a href="tel:+255711770224">
                +255711770224
              </a>
            </li>
            <li>
              <span className="icon fa-envelope"></span>{" "}
              <a href="mailto:info@msukosisal.co.tz">
                info@msukosisal.co.tz
              </a>
            </li>
            <li>
              <span className="icon fa-map-marker"></span> Kimamba, Kilosa
              Morogor, Tanzania
            </li>
            <li>
              <span className="icon fa-facebook socials"></span>
              <span className="icon fa-instagram socials"></span>
              <span className="icon fa-twitter socials"></span>
            </li>
          </ul>
        </div>
        <div className="copyright">
          &copy; Msukosisal 2019
        </div>
      </footer>
    </div>
  );
}

export default Footer;
