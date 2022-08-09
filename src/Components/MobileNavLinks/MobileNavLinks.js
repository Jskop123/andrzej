import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../Utils/Devices/Devices";

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60vw;
  @media ${devices.mobile} {
    display: flex;
    position: fixed;
    top: 10vh;
    flex-direction: column;
    height: 50vh;
    width: 100%;
    background-color: #000;
    opacity: 1;
    &:hover {
      opacity: 1;
    }
  }
`
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  opacity: .8;
  font-weight: bold;
  transition: .3s;
  &:hover {
    border-bottom: 3px solid #00bfff;
    color: #00bfff;
    opacity: 1;
  }
  @media ${devices.mobile} {
    margin: 10px;
    opactity: 1;
    width: 100%;
  }
`
const Li = styled.li`
  
`

const NavLinks = () => (
  <Ul>
    <Li>
      <StyledNavLink to="/">About</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/offers">Offers</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/works">Works</StyledNavLink>
    </Li>
    <Li>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </Li>
    <Li>ENG/PL</Li>
  </Ul>
);

export default NavLinks