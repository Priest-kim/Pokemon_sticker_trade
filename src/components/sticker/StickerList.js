import React from "react";
import styled from "styled-components";
import Sticker from "./Sticker";

const cardList = [
  {
    id: 1,
    name: "Charizard",
    img: "Charizard",
    avgPrice: 7000,
  },
  {
    id: 2,
    name: "Pikachu",
    img: "Pikachu",
    avgPrice: 5000,
  },
  {
    id: 3,
    name: "Ditto",
    img: "Ditto",
    avgPrice: 8000,
  },
  {
    id: 4,
    name: "Psyduck",
    img: "Psyduck",
    avgPrice: 4500,
  },
  {
    id: 5,
    name: "Bulbasaur",
    img: "Bulbasaur",
    avgPrice: 2400,
  },
  {
    id: 6,
    name: "Gyarados",
    img: "Gyarados",
    avgPrice: 6000,
  },
  {
    id: 7,
    name: "Butterfree",
    img: "Butterfree",
    avgPrice: 3333,
  },
  {
    id: 8,
    name: "Gastly",
    img: "Gastly",
    avgPrice: 8000,
  },
  {
    id: 1,
    name: "Mew",
    img: "Mew",
    avgPrice: 50000,
  },
];

const CadrList = () => {
  return (
    <Wrapper>
      <Container>
        {cardList.map((card, idx) => (
          <Sticker key={idx} card={card} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default CadrList;
const Wrapper = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
