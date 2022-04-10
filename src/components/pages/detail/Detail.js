import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Wrapper>
      <MonsterImageArea></MonsterImageArea>
      <MonsterInfomationArea>
        <MainTitleBox>
          <p>영어 이름</p>
          <p>한글 이름</p>
        </MainTitleBox>
        <ButtonArea></ButtonArea>
        <MonsterDetailArea>
          <p>타입 : </p>
          <p>
            Bulbasaur is a small, quadrupedal amphibian Pokémon that has
            blue-green skin with darker patches. It has red eyes with white
            pupils, pointed, ear-like structures on top of its head, and a
            short, blunt snout with a wide mouth. A pair of small, pointed teeth
            are visible in the upper jaw when its mouth is open. Each of its
            thick legs ends with three sharp claws. On Bulbasaur's back is a
            green plant bulb, which is grown from a seed planted there at birth.
            The bulb also conceals two slender, tentacle-like vines and provides
            it with energy through photosynthesis as well as from the
            nutrient-rich seeds contained within.
          </p>
        </MonsterDetailArea>
      </MonsterInfomationArea>
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
  padding: 10px 0 0 40px;
  font-size: 2rem;

  p:first-child {
    font-size: 3rem;
    font-weight: bold;
  }
`;

const ButtonArea = styled.div`
  background-color: lightseagreen;
  height: 200px;
`;

const MonsterDetailArea = styled.div`
  padding: 60px 30px;
  background-color: lightsalmon;
  height: 100%;
  text-align: center;
  p:first-child {
    font-size: 2rem;
  }
  p:last-child {
    font-size: 1.5em;
  }
`;
