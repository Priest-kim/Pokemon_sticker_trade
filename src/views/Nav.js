import React from "react";
import styled from "styled-components";

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

const Logo = styled.div`
  width: 100px;
`;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
`;

const Controller = styled.div`
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
    </Common>
  );
};

export default Nav;
