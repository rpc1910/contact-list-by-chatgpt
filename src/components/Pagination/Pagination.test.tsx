import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders page numbers correctly", () => {
    const onPageChange = jest.fn();
    render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        onPageChange={onPageChange}
      />
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("calls onPageChange when page button is clicked", () => {
    const onPageChange = jest.fn();
    render(
      <Pagination
        totalItems={100}
        itemsPerPage={10}
        onPageChange={onPageChange}
      />
    );
    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
