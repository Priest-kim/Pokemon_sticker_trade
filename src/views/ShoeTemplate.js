import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Tamplate = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  border-radius: 4px;
`;

const ShoeTamplate = () => {
  return (
    <Tamplate>
      <Nav />
    </Tamplate>
  );
};

export default ShoeTamplate;
