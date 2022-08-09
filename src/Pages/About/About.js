import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import backgroundphoto from './../../img/DJI_0007.jpg'
import img1 from './../../img/FOX00650.jpg'
import img2 from './../../img/20210515_151908.jpg'
//przejscie strzałki do prawej i obrocenie o 180

const Header = styled.header`
  height: 100vh;
  margin-top: 0;
`

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: 100% 0;
`
const H1 = styled.h1`
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%);
  color: #fff;
  z-index: 1;
  font-size: 20px;
  padding: 15px;
  opacity: .8;
  background-color: #000;
  border-bottom: 3px solid #00bfff;
  transition: 1s;
  &:hover {
    transform: rotate(90deg);
    opacity: 1;
  }
`
const Div = styled.div`
  border: 3px solid #00bfff;
  width: 80px;
  height: 80px;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 85vh;
  left: 50vw;
  text-align: center;
  transform: translate(-50%);
  font-size: 50px;
  color: #fff;
  opacity: .8;
  transition: .3s;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: translate(-50%, 20px);
  }
`
const Section = styled.section`
  background-color: #000;
  margin-top: 0;
  color: #fff;
`
const Img1 = styled.img`
width: 80vw;
`
const Text = styled.div`
  margin: 0 auto;
  display: block;
  width: 80vw;
  padding: 2vh 0;
`
const About = () => {
  return <>
    <Header>
      <Img src={backgroundphoto} />
      <Div>
        <AiOutlineArrowDown />
      </Div>
    </Header>
    <Section>
      <Text>
        <h1>O nas</h1>
        <h2>Tytuł coś takiego</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        <Img1 src={img1} alt="abc"/>
      </Text>
      <Text>
        <h2>Znowu jakis tytuł</h2>
        <p>hen an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <Img1 src={img2} alt="abc"/>
      </Text>
      <Text>
        <p>
        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        </p>
      </Text>
    </Section>
  </>;
};

export default About;