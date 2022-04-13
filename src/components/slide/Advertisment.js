import React from "react";
import styled from "styled-components";

const SlideItem = ({ ad }) => {
  const { conpany, path } = ad;
  return (
    <Box>
      {conpany}
      <br />
      <img src={path} alt="shoes" />
    </Box>
  );
};

export default SlideItem;

const Box = styled.li`
  font-size: 4rem;
  height: 100%;
  min-width: 100%;
  background-color: lightcoral;
`;
