import React, { useState } from "react";
import {
  StyledHeader,
  StyledMobileNavToggle,
  StyledNavLink,
} from "./navbarheader.styled";

export const NavBarHeader = () => {
  const [activeLink, setActiveLink] = useState("hero");

  const handleNavLinkClick = (sectionId) => {
    setActiveLink(sectionId);
  };

  return (
    <StyledHeader>
      <StyledMobileNavToggle className="bi bi-list mobile-nav-toggle d-lg-none"></StyledMobileNavToggle>
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <StyledNavLink
            href="#hero"
            className={`nav-link scrollto ${
              activeLink === "hero" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("hero")}
          >
            <i className="bx bx-home"></i> <span>Home</span>
          </StyledNavLink>
          <li>
            <StyledNavLink
              href="#about"
              className={`nav-link scrollto ${
                activeLink === "about" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("about")}
            >
              <i className="bx bx-user"></i> <span>About</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              href="#resume"
              className={`nav-link scrollto ${
                activeLink === "resume" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("resume")}
            >
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              href="#portfolio"
              className={`nav-link scrollto ${
                activeLink === "portfolio" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("portfolio")}
            >
              <i className="bx bx-book-content"></i> <span>Portfolio</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              href="#contact"
              className={`nav-link scrollto ${
                activeLink === "contact" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("contact")}
            >
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};
