import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import SlideItem from "./Advertisment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import useInterval from "../../hooks/useInterval";

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
  {
    id: 3,
    img: "CocaCola",
  },
];

const Slider = () => {
  const TOTAL_SLIDES = adList.length - 1; // 전체 슬라이드 배열 의 length 지만 마지막인덱스를 위해 -1
  const [curSlide, setCurSlide] = useState(0); // 현재 슬라이드의 값
  const slideRef = useRef(null);
  const 양끝_추가될_베너_갯수 = 1;

  const [isDisplay, setIsDisplay] = useState(false);

  const NextSlide = () => {
    if (curSlide >= TOTAL_SLIDES) {
      // 현재 슬라이드가 마지막 슬라이드면
      setCurSlide(0); // 처음으로
    } else {
      // 현재 슬라이드가 마지막 슬라이드가 아니면
      setCurSlide(curSlide + 1); // 다음 슬라이드로
    }
  };

  const PrevSlide = () => {
    if (curSlide === 0) {
      // 현재 슬라이드가 첫번쨰 슬라이드면
      setCurSlide(TOTAL_SLIDES); // 맨 뒤로
    } else {
      // 현재 슬라이드가 첫번쨰  슬라이드가 아니면
      setCurSlide(curSlide - 1); // 이전 슬라이드로
    }
  };

  const showArrowOnBanner = () => {
    setIsDisplay(!isDisplay);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${curSlide}00%)`;
  }, [curSlide]);

  useInterval(() => {
    NextSlide();
  }, 5000);

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < 양끝_추가될_베너_갯수) {
      addedLast.push(adList[index % adList.length]);
      addedFront.unshift(adList[adList.length - 1 - (index % adList.length)]);
      index++;
    }
    return [...addedFront, ...adList, ...addedLast];
  }

  return (
    <SlideDiv>
      <SlideContent
        onPointerOver={showArrowOnBanner}
        onPointerOut={showArrowOnBanner}
      >
        <RightArrow onClick={NextSlide} isDisplay={isDisplay}>
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
        </RightArrow>
        <BoxList ref={slideRef}>
          {adList.map((ad) => (
            <SlideItem ad={ad} key={ad.id} />
          ))}
        </BoxList>
        <LeftArrow onClick={PrevSlide} isDisplay={isDisplay}>
          <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" />
        </LeftArrow>
      </SlideContent>
    </SlideDiv>
  );
};

export default Slider;

const SlideDiv = styled.div`
  margin-top: 30px;
  height: 300px;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const SlideContent = styled.div`
  margin: 0 auto;

  overflow: hidden;
  position: relative;
  height: 100%;
  width: 900px;
`;

const BoxList = styled.div`
  display: flex;
`;

const LeftArrow = styled.div`
  display: ${({ isDisplay }) => (isDisplay ? "" : "none")};
  position: absolute;
  top: 45%;
  left: 30px;
  right: 0px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
const RightArrow = styled.div`
  display: ${({ isDisplay }) => (isDisplay ? "" : "none")};
  z-index: 1;
  position: absolute;
  top: 45%;
  right: 30px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
