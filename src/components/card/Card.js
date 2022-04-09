import React from "react";
import styled from "styled-components";

const Card = () => {
  return <Item>card</Item>;
};

export default Card;

const Item = styled.div`
  margin-top: 40px;
  min-width: 450px;
  height: 500px;
  border: 1px solid black;
  &:not(:nth-child(4n + 0)) {
    margin-right: 100px;
  }
`;
