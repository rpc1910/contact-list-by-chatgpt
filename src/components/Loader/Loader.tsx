import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
`;

const Loader: React.FC = () => {
  return <StyledLoader data-testid="loader">Loading...</StyledLoader>;
};

export default Loader;
