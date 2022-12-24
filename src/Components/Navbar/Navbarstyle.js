import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "#transparent")};
  height: 80px;
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  font-size: 16px;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.9s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  z-index: 1;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  display: flex;
  font-weight: bold;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  margin-left: 24px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    transform: translate(-100%, 60%);
    top: 0;
    right: 0;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;

  &.active{
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  border: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
