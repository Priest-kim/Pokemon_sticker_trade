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
    id: 9,
    name: "Mew",
    img: "Mew",
    avgPrice: 50000,
  },
  {
    id: 10,
    name: "Eevee",
    img: "Eevee",
    avgPrice: 10000,
  },
  {
    id: 11,
    name: "Gengar",
    img: "Gengar",
    avgPrice: 9000,
  },
  {
    id: 12,
    name: "Mewtwo",
    img: "Mewtwo",
    avgPrice: 50000,
  },
  {
    id: 13,
    name: "Sandshrew",
    img: "Sandshrew",
    avgPrice: 50000,
  },
  {
    id: 14,
    name: "Charmander",
    img: "Charmander",
    avgPrice: 7000,
  },
  {
    id: 15,
    name: "Dratini",
    img: "Dratini",
    avgPrice: 6500,
  },
  {
    id: 16,
    name: "Vaporeon",
    img: "Vaporeon",
    avgPrice: 12000,
  },
  {
    id: 17,
    name: "Dragonite",
    img: "Dragonite",
    avgPrice: 5000,
  },
  {
    id: 18,
    name: "Porygon",
    img: "Porygon",
    avgPrice: 2000,
  },
  {
    id: 19,
    name: "Starmie",
    img: "Starmie",
    avgPrice: 3400,
  },
  {
    id: 20,
    name: "Gloom",
    img: "Gloom",
    avgPrice: 5000,
  },
  {
    id: 21,
    name: "Farfetch'd",
    img: "Farfetch'd",
    avgPrice: 5000,
  },
  {
    id: 22,
    name: "Wartortle",
    img: "Wartortle",
    avgPrice: 7000,
  },
  {
    id: 23,
    name: "Venusaur",
    img: "Venusaur",
    avgPrice: 2000,
  },
  {
    id: 24,
    name: "Blastoise",
    img: "Blastoise",
    avgPrice: 3000,
  },
  {
    id: 25,
    name: "Tauros",
    img: "Tauros",
    avgPrice: 5000,
  },
  {
    id: 26,
    name: "Magnemite",
    img: "Magnemite",
    avgPrice: 1500,
  },
  {
    id: 27,
    name: "Snorlax",
    img: "Snorlax",
    avgPrice: 9000,
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
