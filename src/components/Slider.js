import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import img1 from "./../images/1.png";
import img2 from "./../images/2.png";
import img3 from "./../images/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import SlideItem from "./Slide";

const Slider = () => {
  const TOTAL_SLIDES = 3; // 전체 슬라이드 배열 의 length 지만 마지막인덱스를 위해 -1
  const [curSlide, setCurSlide] = useState(0); // 현재 슬라이드의 값
  const slideRef = useRef(null);

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

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${curSlide}00%)`;
  }, [curSlide]);

  return (
    <SlideDiv>
      <SlideContent>
        <RightArrow onClick={NextSlide}>
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" />
        </RightArrow>
        <BoxList ref={slideRef}>
          <SlideItem img={img1} />
          <SlideItem img={img2} />
          <SlideItem img={img3} />
          <SlideItem img={img3} />
        </BoxList>
        <LeftArrow onClick={PrevSlide}>
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
  position: absolute;
  top: 45%;
  left: 30px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
const RightArrow = styled.div`
  z-index: 1;
  position: absolute;
  top: 45%;
  right: 30px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
