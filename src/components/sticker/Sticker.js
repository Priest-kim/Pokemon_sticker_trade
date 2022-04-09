import React from "react";
import styled from "styled-components";
import TradeButton from "../button/TradeButton";

const Card = ({ card }) => {
  const path = `/img/sticker/${card.img}.png`;

  const addComma = (num) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  };

  return (
    <Item>
      <NameTag>{card.name}</NameTag>
      <ItemImage src={path} />
      <br />
      <PriceTag>Avg Price : {addComma(card.avgPrice)}</PriceTag>
      <ButtonGroup>
        <TradeButton color={"#a0f900"} content={"buy"} />
      </ButtonGroup>
    </Item>
  );
};

export default Card;

const Item = styled.div`
  display: flex;

  @media screen and (max-width: 1800px) {
    width: 350px;
    margin: 1rem;
  }
`;

const ItemImage = styled.img`
  margin: 7rem;
  width: 200px;
  height: 200px;
`;

const PriceTag = styled.div`
  text-align: center;
  /* position: absolute; */
  font-size: 1.5rem;
  font-weight: bold;
  top: 80%;
`;

const NameTag = styled.h1`
  /* position: absolute; */
  top: 10%;
`;

const ButtonGroup = styled.div``;
