import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer with the correct text", () => {
    render(<Footer />);
    expect(screen.getByText(/created by chatgpt/i)).toBeInTheDocument();
  });
});
