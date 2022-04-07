import React from "react";
import styled from "styled-components";

const SlideItem = ({ img }) => {
  return (
    <Box>
      <img src={img} alt="shose" />
    </Box>
  );
};

export default SlideItem;

const Box = styled.div`
  > img {
    height: 300px;
    width: 900px;
    background-color: lightcoral;
  }
`;
