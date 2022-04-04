import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  background-color: #333333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
`;

const Nav = () => {
  return <NavBar>Nav</NavBar>;
};

export default Nav;
