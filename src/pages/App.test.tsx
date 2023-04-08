import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";
jest.mock("axios");

const mockData = {
  users: [
    {
      id: 1,
      name: "John",
      email: "john@test.com",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@test.com",
    },
  ],
  total: 2,
};

describe("App component", () => {
  beforeEach(() => {
    // @ts-ignore
    axios.get.mockResolvedValueOnce({ data: mockData });
  });

  it("renders the header", async () => {
    render(<App />);
    const headerElement = screen.getByText(/Meus Contatos/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("renders the loader when data is being fetched", async () => {
    render(<App />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders the contact list after data has been fetched", async () => {
    render(<App />);
    const contacts = await screen.findAllByTestId("contact");
    expect(contacts).toHaveLength(2);
  });

  it("renders the pagination component when total items is greater than 0", async () => {
    render(<App />);
    const pagination = await screen.findByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  it("renders the correct number of contacts per page", async () => {
    render(<App />);
    const contacts = await screen.findAllByTestId("contact");
    expect(contacts).toHaveLength(2);
  });
});
