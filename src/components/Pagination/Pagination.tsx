import React from "react";
import styled from "styled-components";

interface Props {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);
  const pageArray = Array.from({ length: pageNumbers }, (_, i) => i + 1);

  return (
    <StyledNav data-testid="pagination">
      <StyledUl>
        {pageArray.map((page) => (
          <StyledLi key={page}>
            <StyledButton onClick={() => onPageChange(page)}>
              {page}
            </StyledButton>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  margin: 10px 0;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 0 5px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: #f7f7f7;
  color: #333;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077ff;
  }
`;

export default Pagination;
