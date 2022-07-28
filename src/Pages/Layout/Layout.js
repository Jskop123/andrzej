import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

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
`
const Logo = styled.h1`
  width: 30vw;
  text-align: center;
  color: #fff;
`
const Lang = styled.h3`
  color: #fff;
  width: 10vw;
`
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60vw;
`
const Li = styled.li`
  
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  opactity: .8;
  font-weight: bold;
  transition: .3s;
  &:hover {
    border-bottom: 3px solid #00bfff;
    color: #00bfff;
    opactity: 1;
  }
`

const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  width: 100vw;
  
`
const Fnav = styled.nav`

`
const Ful = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  border: 1px solid black;
`
const P = styled.p`
  text-align: center; 
  padding: 5vh;
`

const Layout = () => {
  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
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
        </Ul>
        <Lang>ENG/PL</Lang>
      </Nav>

      <Outlet />
      <Footer>
        <Fnav>
          <Ful>
            <Li>
              Kontakt
              <ul>
                <li>Mail</li>
                <li>Telefon</li>
                <li>Adres?</li>
              </ul>
            </Li>
            <Li>
              Social 
              <ul>
                <li>facebook</li>
                <li>instagram</li>
                <li>youtube</li>
              </ul>
            </Li>
            <Li>
              Links
            </Li>
          </Ful>
        </Fnav>
        <div>
          <P>copyrights 2022 <b>Andrzej Laskowski</b></P>
        </div>
      </Footer>
    </>
  )
};

export default Layout;