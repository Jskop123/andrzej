import styled from "styled-components";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillMail, AiFillPhone, AiFillHome} from "react-icons/ai";
import { devices } from "../../Utils/Devices/Devices";
const FooterEl = () => {
  const Footer = styled.footer`
    border-top: 3px solid #00bfff;
    padding-top: 5vh;
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
    @media ${devices.mobile} {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
  `
  const Fli = styled.li`
    @media ${devices.mobile}{
      padding: 5vh 0;
      display: flex;
      flex-direction: column;
      border-bottom: 3px solid #00bfff;
      width: 60vw;
    }
  `
  const Ul = styled.ul`
    list-style: none;
    padding: 0;
    padding-top: 2vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
  `
  const P = styled.p`
    text-align: center; 
    padding: 5vh;
  `
  const Li = styled.li`
    padding: 1vh;
    font-size: 16px;
  `
  const Icon = styled.span`
    font-size: 25px;
    color: #fff;
  `
  const Links = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    border-bottom: 3px solid #000;
    transition: .3s;
    &:hover {
      border-bottom: 3px solid #00bfff;
      color: #00bfff;
    }
  `
  return (
    <Footer>
      <Fnav>
        <Ful>
          <Fli>
            Kontakt
            <Ul>
              <Li><Links href="#"><Icon><AiFillMail /></Icon>&#160;mail@mail.com</Links></Li>
              <Li><Links href="#"><Icon><AiFillPhone /></Icon>&#160;123-456-789</Links></Li>
              <Li><Links href="#"><Icon><AiFillHome /></Icon>&#160;Warszawa ul. Abc 04-123</Links></Li>
            </Ul>
          </Fli>
          <Fli>
            Social 
            <Ul>
              <Li><Links href="https://www.facebook.com/"><Icon><AiFillFacebook /></Icon>&#160;facebook.com</Links></Li>
              <Li><Links href="https://www.instagram.com/"><Icon><AiFillInstagram /></Icon>&#160;instagram.com</Links></Li>
              <Li><Links href="https://www.youtube.com/"><Icon><AiFillYoutube /></Icon>&#160;youtube.com</Links></Li>
            </Ul>
          </Fli>
          <Fli>
            Links
          </Fli>
        </Ful>
      </Fnav>
      <div>
        <P>copyrights 2022 <b>Andrzej Laskowski</b></P>
      </div>
    </Footer>
  )
}
export default FooterEl




      