import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "../../../layout/Title";
import HorizontalButton from "../../button/HorizontalButton";

const typeColor = [
  {
    type: "Bug",
    "background-color": "#ffdf75",
  },
  {
    type: "Water",
    "background-color": "#89c9ff",
  },
  {
    type: "Fire",
    "background-color": "#ff7783",
  },
  {
    type: "Flying",
    "background-color": "#d8c8ff",
  },
  {
    type: "Poison",
    "background-color": "#8e59ff",
  },
  {
    type: "Grass",
    "background-color": "#aaffbf",
  },
  {
    type: "Normal",
    "background-color": "#ffffe3",
  },
  {
    type: "Electric",
    "background-color": "#fffb28",
  },
];

const Detail = () => {
  const { id } = useParams();
  const [monster, setMonster] = useState({
    id: -1,
    eng: "unknown",
    kor: "unknown",
    type: ["Normal"],
    path: "/img/sticker/unknown.png",
    desc: "unknown",
    price: 1500,
  });
  const { eng, kor, type, path, desc, price, num } = monster;

  useEffect(() => {
    fetch(`http://localhost:3002/monster?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMonster(data[0]);
      });
  }, [id]);

  const makeTitle = () => {
    return eng ? `📜 ${eng}` : "something wrong!!💀☠️👻";
  };

  const matchColor = (type) => {
    const result = typeColor.filter((item) => item.type === type);

    return result[0];
  };
  const addComma = (num) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  };
  return (
    <>
      <Title content={makeTitle()} />
      <Wrapper>
        <MonsterImageArea>
          <Iamge src={path} />
        </MonsterImageArea>
        <MonsterInfomationArea>
          <MainTitleBox>
            <p>
              🎈{num} - {eng}
            </p>
            <p>{kor}</p>
          </MainTitleBox>
          <ButtonArea>
            <HorizontalButton
              color={"lightgreen"}
              content={`Lowest Price : ${addComma(price)}`}
            />
            <HorizontalButton color={"#ff9d9e"} content={"문의하기"} />
          </ButtonArea>
          <MonsterDetailArea>
            <div>
              Type :
              {type.map((item, idx) => (
                <Type key={idx} color={matchColor(item, idx)}>
                  {item}
                </Type>
              ))}
            </div>
            <p>{desc}</p>
          </MonsterDetailArea>
        </MonsterInfomationArea>
      </Wrapper>
    </>
  );
};

export default Detail;

const Wrapper = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 800px;
  background-color: #ecf0f3;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const MonsterImageArea = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
`;

const MonsterInfomationArea = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  background-color: transparent;
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
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const MonsterDetailArea = styled.div`
  padding: 60px 30px;
  height: 100%;

  div:first-child {
    font-weight: 1000;
    display: flex;
    font-size: 2rem;
    margin: 0 45px;
  }
  p:last-child {
    padding-left: 40px;
    font-size: 1.5em;
  }
`;

const Type = styled.div`
  height: 100%;
  padding: 3px 15px;
  border-radius: 10px;
  ${({ color }) => color};
`;

const Iamge = styled.img`
  height: 80%;
  width: 80%;
`;
