import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { devices } from "../../Utils/Devices/Devices";
import NavLinks from '../../Components/NavLinks/NavLinks'
import MobileNavLinks from '../../Components/MobileNavLinks/MobileNavLinks'

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
    &:hover {
     opacity: .8;
  }
  }
`
const Li = styled.li`
  
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