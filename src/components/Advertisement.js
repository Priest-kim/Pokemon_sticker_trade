import styled from "styled-components";
import React, { useState } from "react";

const adList = [
  {
    id: 1,
    img: "Constto",
  },
  {
    id: 2,
    img: "Benedicta",
  },
  {
    id: 3,
    img: "Slime",
  },
];

const Advertisement = () => {
  const [ad, setAd] = useState(adList[0]);

  const imgChangeLeft = () => {
    if (ad.id > adList.length) {
      setAd(adList[0]);
    } else {
      setAd(adList[ad.id + 1]);
    }
  };
  return (
    <Container>
      <MainBanner>
        <button onClick={imgChangeLeft}> 증가</button>
        {ad.img}
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

  @media screen and(min-width: 900px) {
    display: none;
  }
`;
