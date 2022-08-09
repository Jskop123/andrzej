import styled from "styled-components";
import { devices } from "../../Utils/Devices/Devices";

const Categorie = styled.div`
  width: 50vw;
  height: 100vh;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .8;
  transition: .3s;
  font-size: 25px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  @media ${devices.mobile}{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
  }
`
const Img = styled.img`
  height: 100vh;
  width: 100%;
`
const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 25;
  @media ${devices.mobile}{
    top: 25%;
  }
`
const WorksCategorie = ({img, text}) => (
  <Categorie>
    <Img src={img}/>
    <Text>{text}</Text>
  </Categorie>
)
export default WorksCategorie