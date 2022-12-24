import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navbarstyle";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = ({ toggle, isOpen }) => {
  const [scrollNav, SetScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      {/* <IconContext.Provider value={{color:"#fff"}} > */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer isOpen={isOpen}>
          <NavLogo onClick={toggleHome} to="/">
            s-coin
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
                // activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discovery"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              >
                Discovery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                duration={500}
                spy={true}
                offset={-80}
                smooth={true}
                exact="true"
              >
                Signup
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin"> Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
    </>
  );
};

export default Navbar;
