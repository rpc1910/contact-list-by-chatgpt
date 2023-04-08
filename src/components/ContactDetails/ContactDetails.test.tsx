import React from "react";
import { render, screen } from "@testing-library/react";
import ContactDetails from "./ContactDetails";
import { Contact } from "../ContactsList/ContactsList";

const mockContact: Contact = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  phone: "+1 123-456-7890",
  image: "https://dummyimage.com/300x300/000/fff",
  maidenName: undefined,
  age: 30,
  gender: "Male",
  username: "johndoe",
  password: "123456",
  birthDate: "1992-01-01",
  bloodGroup: "A+",
  height: 180,
  weight: 75,
  eyeColor: "Brown",
};

describe("ContactDetails", () => {
  it("renders contact details correctly", () => {
    render(<ContactDetails contact={mockContact} onClose={() => {}} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    const emailElement = screen.getByTestId("contact-email");
    expect(emailElement.textContent).toBe("johndoe@example.com");

    // expect(screen.getByText('+1 123-456-7890')).toBeInTheDocument();
    const phoneElement = screen.getByTestId("contact-phone");
    expect(phoneElement.textContent).toBe("+1 123-456-7890");

    expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("Maiden Name")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("123456")).toBeInTheDocument();
    expect(screen.getByText("Birth Date")).toBeInTheDocument();
    expect(screen.getByText("1992-01-01")).toBeInTheDocument();
    expect(screen.getByText("Blood Group")).toBeInTheDocument();
    expect(screen.getByText("A+")).toBeInTheDocument();
    expect(screen.getByText("Height")).toBeInTheDocument();
    expect(screen.getByText("180 cm")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("75 kg")).toBeInTheDocument();
    expect(screen.getByText("Eye Color")).toBeInTheDocument();
    expect(screen.getByText("Brown")).toBeInTheDocument();
  });
});
