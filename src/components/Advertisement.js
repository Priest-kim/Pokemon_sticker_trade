import styled from "styled-components";
import React, { useState } from "react";

const adList = [
  {
    id: 0,
    img: "Constto",
  },
  {
    id: 1,
    img: "Benedicta",
  },
  {
    id: 2,
    img: "Slime",
  },
];

const Advertisement = () => {
  const [ad, setAd] = useState(adList[0]);
  const [isDisplay, setIsDisplay] = useState(false);

  const imgChangeLeft = () => {
    if (ad.id === adList.length - 1) {
      setAd(adList[0]);
    } else {
      setAd(adList[ad.id + 1]);
    }
  };

  const imgChangeRight = () => {
    if (ad.id === 0) {
      setAd(adList[adList.length - 1]);
    } else {
      setAd(adList[ad.id - 1]);
    }
  };

  const showArrowOnBanner = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <Container>
      <MainBanner
        onPointerOver={showArrowOnBanner}
        onPointerOut={showArrowOnBanner}
      >
        <Button onClick={imgChangeRight} isDisplay={isDisplay}>
          감소
        </Button>
        {ad.img}
        <Button onClick={imgChangeLeft} isDisplay={isDisplay}>
          증가
        </Button>
      </MainBanner>
    </Container>
  );
};

export default Advertisement;

const Container = styled.div`
  display: flex;
  margin-top: 1em;
  height: 200px;
  background-color: white;
  justify-content: center;
`;

const MainBanner = styled.div`
  display: flex;
  background-color: lightcoral;
  width: 900px;
  justify-content: space-between;

  @media screen and(min-width: 900px) {
    display: none;
  }
`;

const Button = styled.button`
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
`;
