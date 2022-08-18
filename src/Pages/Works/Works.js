import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import WorksCategorie from "../../Components/WorksCategorie/WorksCategorie";
import { devices } from "../../Utils/Devices/Devices";
import img1 from './../../img/FOX00650.jpg'
import img2 from './../../img/20210515_151908.jpg'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  @media ${devices.mobile}{
    flex-direction: column;
  }
`

const Works = () => {
  const url = window.location.pathname;
  const movies = `${url}/movies`
  const photos = `${url}/photos`
  return (
    <Div>
      <NavLink to={movies}>
        <WorksCategorie img={img1} text="Tu film czyli gif" />
      </NavLink>
      <NavLink to={photos}>
        <WorksCategorie img={img2} text="Zdjecie" />
      </NavLink>
    </Div>
  );
};

export default Works;