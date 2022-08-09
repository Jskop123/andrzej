import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { devices } from "../../Utils/Devices/Devices";
import NavLinks from '../../Components/NavLinks/NavLinks'
import MobileNavLinks from '../../Components/MobileNavLinks/MobileNavLinks'
import FooterEl from "../../Components/Footer/Footer";

const Nav = styled.nav`
  border-bottom: 3px solid #00bfff;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
  z-index: 2;
  transition: .3s;
  opacity: .8;
  &:hover {
    opacity: 1;
  }
  @media ${devices.mobile} {
    width: 100%;
    height: 10vh;
  }
`
const Logo = styled.h1`
  width: 30vw;
  text-align: center;
  color: #fff;
`
const Lang = styled.h3`
  color: #fff;
  width: 10vw;
  @media ${devices.mobile}{
    display: none;
  }
`
const Hamburger = styled.div`
  display: none;
  @media ${devices.mobile}{
    display: block;
    font-size: 40px;
  }
`
const Layout = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <Hamburger onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>&#9776;</Hamburger>
        <NavLinks />
        {isNavExpanded ? <MobileNavLinks /> : null}
        <Lang>ENG/PL</Lang>
      </Nav>
      <Outlet />
      <FooterEl />
    </>
  )
};

export default Layout;