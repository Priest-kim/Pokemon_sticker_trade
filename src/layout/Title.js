import React from "react";
import styled from "styled-components";

const Title = ({ content }) => {
  return <MainTitle>{content}</MainTitle>;
};

export default Title;

const MainTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
