import React from "react";
import styled from "styled-components";

const SlideItem = ({ advertisment }) => {
  const { conpany, path } = advertisment;
  console.log(path);
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
