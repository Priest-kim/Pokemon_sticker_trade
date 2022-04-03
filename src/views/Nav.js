import React, { useState } from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: 1px solid lightgreen;
  border-radius: 15px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Home = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  text-decoration: none;
  color: lightgreen;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 100px;
`;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  right: 32px;
  margin-right: 10px;
`;

const Controller = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  :hover {
    background-color: #ddd;
  }
`;

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Common>
      <Home href="/">ShoeMar</Home>
      <Logo>슈마</Logo>
      <ControlBox>
        <Controller> </Controller>
        <MenuBar
          href="#"
          onMouseOver={() => {
            setMenu(!menu);
            console.log(menu);
          }}
        >
          <IoIosMenu />
        </MenuBar>
      </ControlBox>
    </Common>
  );
};

export default Nav;
