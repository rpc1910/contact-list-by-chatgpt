import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "react-modal";
import ContactsList from "./ContactsList";

const contacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    email: "johndoe@example.com",
    phone: "+1 123-456-7890",
    username: "johndoe",
    password: "password",
    birthDate: "01/01/1990",
    image: "https://via.placeholder.com/50",
    bloodGroup: "O+",
    height: 180,
    weight: 80,
    eyeColor: "Blue",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    gender: "Female",
    email: "janedoe@example.com",
    phone: "+1 987-654-3210",
    username: "janedoe",
    password: "password",
    birthDate: "01/01/1995",
    image: "https://via.placeholder.com/50",
    bloodGroup: "AB+",
    height: 160,
    weight: 60,
    eyeColor: "Green",
  },
];

describe("ContactsList component", () => {
  beforeEach(() => {
    Modal.setAppElement(document.createElement("div"));
  });

  it("renders a list of contacts", () => {
    render(<ContactsList contacts={contacts} />);
    const contactItems = screen.getAllByRole("listitem");
    expect(contactItems).toHaveLength(2);
    expect(contactItems[0]).toHaveTextContent("John Doe");
    expect(contactItems[1]).toHaveTextContent("Jane Doe");
  });

  it("displays contact details when a contact is clicked", () => {
    render(<ContactsList contacts={contacts} />);
    const contactItem = screen.getByText("John Doe");
    fireEvent.click(contactItem);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent("John Doe");
  });
});
