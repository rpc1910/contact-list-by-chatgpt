import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should call onSearch with input value when user types on search input", () => {
    const onSearchMock = jest.fn();
    render(<Header onSearch={onSearchMock} />);

    const searchInput = screen.getByPlaceholderText("Buscar contatos");
    const searchQuery = "John Doe";

    fireEvent.change(searchInput, { target: { value: searchQuery } });

    expect(onSearchMock).toHaveBeenCalledWith(searchQuery);
  });
});
