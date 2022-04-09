import React from "react";
import styled from "styled-components";

const TradeButton = (props) => {
  return <BuyButton color={props.color}>{props.content}</BuyButton>;
};

export default TradeButton;

const BuyButton = styled.a`
  padding: 2px 10px;
  border: 3px solid ${(props) => props.color || "gold"};
  background-color: transparent;
  font-size: 2rem;
  color: ${(props) => props.color || "gold"};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.color || "gold"};
    top: 100%;
    left: 0;
    transition: all 0.4s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateY(-100%);
  }

  &:hover {
    color: whitesmoke;
  }
`;
