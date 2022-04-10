import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sticker from "./Sticker";

const CadrList = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/monster")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  });

  return (
    <Wrapper>
      <Title>welcome to the pokemon trade conter 👌</Title>
      <Container>
        {monsters.map((monster, idx) => (
          <Sticker key={idx} monster={monster} />
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

const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  letter-spacing: 5px;
  text-transform: uppercase;
`;
