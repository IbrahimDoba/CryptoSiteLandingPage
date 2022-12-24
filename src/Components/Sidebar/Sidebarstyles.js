import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 30px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin: 35px;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #fff;

  &:hover {
    color: #01b171;
    transition: 0.3s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 24px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  margin-top: 30px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
