import React from "react";
import styled from "styled-components";
import SHOES from "./shose.jpg";

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  text-decoration: none;
  color: lightgreen;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 100px;
`;

const Nav = () => {
  return (
    <Common>
      <Home href="/">ShoeMar</Home>
      <Logo src={SHOES} />
    </Common>
  );
};

export default Nav;
