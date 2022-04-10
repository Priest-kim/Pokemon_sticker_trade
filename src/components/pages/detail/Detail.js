import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Wrapper>
      <MonsterImageArea></MonsterImageArea>
      <MonsterInfomationArea></MonsterInfomationArea>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 800px;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// const MonsterEncyclopedia = styled.div`
//   display: flex;
//   width: 100%;
//   height: px;
//   background-color: lightsteelblue;
//   align-items: center;
// `;

const MonsterImageArea = styled.div`
  height: 500px;
  width: 500px;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f3;
  border-radius: 20px;
`;

const MonsterInfomationArea = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  background-color: red;
  flex-direction: column;
`;

const MainTitleBox = styled.div`
  width: 100%;
`;
