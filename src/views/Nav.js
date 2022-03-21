import React from "react";
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

const Home = styled.div`
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
    display: none;
  }
`;

const MenuBar = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 32px;
  height: 97px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Controller = styled.a`
  margin: 10px;
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  return (
    <Common>
      <Home href="/">ShoeMar</Home>
      <Logo>슈마</Logo>
      <ControlBox>
        <Controller>계약</Controller>
        <Controller>로그인</Controller>
        <Controller>회원가입</Controller>
      </ControlBox>
      <MenuBar>
        <IoIosMenu />
      </MenuBar>
    </Common>
  );
};

export default Nav;
