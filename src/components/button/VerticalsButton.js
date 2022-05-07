import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TradeButton = ({ id, color, content }) => {
  return (
    <BuyButton to={`/pokemon/${id}`} color={color}>
      {content}
    </BuyButton>
  );
};

export default TradeButton;

const BuyButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  padding: 2px 10px;
  border: 3px solid ${({ color }) => color || "gold"};
  background-color: transparent;
  font-size: 2rem;
  font-weight: 1000;
  color: ${({ color }) => color || "gold"};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  overflow: hidden;

  / &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }

  &:focus {
    outline: none;
  }

  &::before {
    content: "";
    position: absolute;
    height: 101%;
    width: 100%;
    background-color: ${({ color }) => color || "gold"};
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
