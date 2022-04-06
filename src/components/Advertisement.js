import styled from "styled-components";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
        </Button>
        {ad.img}
        <Button onClick={imgChangeLeft} isDisplay={isDisplay}>
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
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

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const MainBanner = styled.div`
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  background-color: lightcoral;
  width: 900px;
  justify-content: space-between;

  @media screen and(min-width: 900px) {
    display: none;
  }
`;

const Button = styled.label`
  z-index: 10;
  display: ${({ isDisplay }) => (isDisplay ? "" : "none")};
  background-color: coral;
  padding-left: 30px;
  padding-top: 73px;
  padding-right: 30px;
`;
