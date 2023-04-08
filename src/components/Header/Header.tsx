import React from "react";
import styled, { ThemeProvider } from "styled-components";

interface HeaderProps {
  onSearch: (value: string) => void;
}

interface ThemeProps {
  primaryColor: string;
  secondaryColor: string;
}

const theme: ThemeProps = {
  primaryColor: "#8A2BE2",
  secondaryColor: "#FFFFFF",
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.primaryColor};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.secondaryColor};
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid gray;
  margin-left: 1rem;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  border-radius: 50px;
  flex: 1;
`;

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <Title>Meus Contatos</Title>
        <SearchInput
          type="text"
          placeholder="Buscar contatos"
          onChange={handleSearch}
        />
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;
