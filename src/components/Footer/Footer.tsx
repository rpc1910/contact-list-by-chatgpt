import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #333;
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by ChatGPT</p>
    </StyledFooter>
  );
};

export default Footer;
