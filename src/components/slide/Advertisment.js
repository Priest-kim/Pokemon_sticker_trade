import React from "react";
import styled from "styled-components";

const SlideItem = ({ ad }) => {
  return (
    <Box>
      {/* <img src={img} alt="shose" /> */}
      <div>
        {ad.id + 1} <br />
        {ad.img}
      </div>
    </Box>
  );
};

export default SlideItem;

const Box = styled.div`
  > div {
    padding-top: 40px;
    font-size: 4rem;
    height: 300px;
    width: 900px;
    background-color: lightcoral;
  }
`;
