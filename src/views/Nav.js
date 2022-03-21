import React, { useState } from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
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
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    display: ${({ menu }) => {
      return menu === false ? "none" : "flex";
    }};
  }
`;

const MenuBar = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 32px;
  height: 97px;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const Controller = styled.a`
  margin: 10px;
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <Common>
      <Home href="/">ShoeMar</Home>
      <Logo>슈마</Logo>
      <ControlBox>
        <Controller href="/login">로그인</Controller>
        <Controller href="/signup">회원가입</Controller>
      </ControlBox>
      <MenuBar
        href="#"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <IoIosMenu></IoIosMenu>
      </MenuBar>
    </Common>
  );
};

export default Nav;
