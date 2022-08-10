import styled from "styled-components";
import { devices } from "../../Utils/Devices/Devices";
import profilowe from "../../img/profilowe.jpeg";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
  margin-top: 0;
  padding-top: 10vh;
`
const H1 = styled.h1`
  text-align: center;
  font-size: 40px;
`
const H1B = styled.h1`
  display: block;
  margin: auto;
  padding: 2vh 0;
  text-align: center;
  font-size: 35px;
`
const H2 = styled.h2`
  padding-top: 5vh;
  text-align: center;
`
const Profile = styled.div`
  width: 30vw;
  display: block;
  margin: 10vh auto;
  text-align: center;
`
const Img = styled.img`
  width: 30vw;
`
const Links = styled.a`
padding-top: 2vh;
text-align: center;
display: block;
margin: auto;
text-decoration: none;
color: #fff;
transition: .3s;
&:hover {
  color: #00bfff;
}
`

const Contact = () => {
  return (
    <Section>
      <H1>Zainteresowany współpracą ?</H1>
      <H1B>...skontaktuj się ze mną !</H1B>
      <H2>Każde zlecenie wyceniamy indywidualnie</H2>
      <Profile>
        <Img src={profilowe} alt="profilowka" />
        <h2>Andrzej Laskowski</h2>
        <Links href="#">123-456-789</Links>
        <Links href="#">mail@mail.com</Links>
      </Profile>
    </Section>
  );
};

export default Contact;
