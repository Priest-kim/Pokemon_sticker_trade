import styled from "styled-components";
import React from "react";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

const Slider = () => {
  return (
    <SlideDiv>
      <SlideContent>
        <Image src={img1} />
        <Image src={img2} />
        <Image src={img3} />
      </SlideContent>
    </SlideDiv>
  );
};

export default Slider;

const SlideDiv = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 300px;
  background-color: black;
  color: white;
  justify-content: center;
`;

const SlideContent = styled.div`
  background-color: white;
  height: 100%;
  width: 60%;
  border: 1px solid black;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background-color: blue;
`;
