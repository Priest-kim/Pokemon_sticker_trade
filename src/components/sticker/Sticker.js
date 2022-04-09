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
      <ImageArea>
        <Iamge src={path} />
      </ImageArea>
      <NameTag>{card.name}</NameTag>
      <PriceTag>Avg Price : {addComma(card.avgPrice)}</PriceTag>
      <BtnArea>
        <TradeButton color={"#72ffa5"} content={"buy"} />
        <TradeButton color={"#ff9069"} content={"sell"} />
      </BtnArea>
    </Item>
  );
};

export default Card;

const Item = styled.div`
  display: flex;
  margin: 30px 20px;
  padding: 30px;
  min-width: 380px;
  height: 400px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

  @media screen and (max-width: 1660px) {
    min-width: 300px;
    margin: 1rem;
  }
`;

const ImageArea = styled.div`
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
  background-color: #ecf0f3;
  border-radius: 10px;
`;

const Iamge = styled.img`
  height: 100%;
  width: 100%;
`;

const NameTag = styled.div`
  font-size: 2.5rem;
  font-weight: 1000;
  color: #31344b;
  margin: 20px 0 10px 0;
`;

const PriceTag = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #44476a;
`;

const BtnArea = styled.div`
  margin-top: 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
