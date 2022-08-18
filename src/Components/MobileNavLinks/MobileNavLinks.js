import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../Utils/Devices/Devices";

const Ul = styled.ul`
  @media ${devices.mobile} {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 10vh;
    flex-direction: column;
    height: 50vh;
    width: 100%;
    background-color: #000;
    border-bottom: 3px solid #00bfff;
  }
`
const StyledNavLink = styled(NavLink)`  
  @media ${devices.mobile} {
    text-decoration: none;
    font-weight: bold;
    margin: 10px;
    width: 100%;
    color: #fff;
  }
`
const NavLinks = () => (
  <Ul>
    <li>
      <StyledNavLink to="/">About</StyledNavLink>
    </li>
    <li>
      <StyledNavLink to="/offers">Offers</StyledNavLink>
    </li>
    <li>
      <StyledNavLink to="/works">Works</StyledNavLink>
    </li>
    <li>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </li>
    <li>ENG/PL</li>
  </Ul>
);

export default NavLinks