import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChatButton = ({ color, content }) => {
  return (
    <Button to={"/"} color={color}>
      {content}
    </Button>
  );
};

export default ChatButton;

const Button = styled(Link)`
  text-decoration: none;
  border-radius: 15px;
  cursor: pointer;
  width: 50%;
  padding: 20px 10px;
  border: 3px solid ${({ color }) => color || "gold"};
  background-color: transparent;
  font-size: 2rem;
  font-weight: 1000;
  color: ${({ color }) => color || "gold"};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  transition: all 1s;
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
    top: 0;
    left: 100%;
    transition: all 1s;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(-100%);
  }

  &:hover {
    color: whitesmoke;
  }
`;
