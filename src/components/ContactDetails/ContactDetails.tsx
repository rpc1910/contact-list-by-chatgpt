import { Contact } from "../ContactsList/ContactsList";
import styled from "styled-components";

interface ContactDetailsProps {
  contact: Contact;
  onClose: () => void;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  td,
  th {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ContactImage = styled.img`
  float: right;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border: 1px solid #ccc;
`;

const ContactDetails: React.FC<ContactDetailsProps> = ({
  contact,
  onClose,
}) => {
  return (
    <div>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ContactImage
        src={contact.image}
        alt={`${contact.firstName} ${contact.lastName}`}
      />
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
      <Table>
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{contact.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{contact.lastName}</td>
          </tr>
          <tr>
            <th>Maiden Name</th>
            <td>{contact.maidenName ?? "-"}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{contact.age}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{contact.gender}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td data-testid="contact-email">{contact.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td data-testid="contact-phone">{contact.phone}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{contact.username}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{contact.password}</td>
          </tr>
          <tr>
            <th>Birth Date</th>
            <td>{contact.birthDate}</td>
          </tr>
          <tr>
            <th>Blood Group</th>
            <td>{contact.bloodGroup}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{contact.height} cm</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{contact.weight} kg</td>
          </tr>
          <tr>
            <th>Eye Color</th>
            <td>{contact.eyeColor}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ContactDetails;
