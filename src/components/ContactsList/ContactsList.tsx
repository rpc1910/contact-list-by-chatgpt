import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import ContactDetails from "../ContactDetails/ContactDetails";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
}

interface ContactsListProps {
  contacts: Contact[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ContactItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

const ContactAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const NoContactsMessage = styled.p`
  margin: 16px 0;
`;

const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  return (
    <>
      {contacts.length === 0 ? (
        <Wrapper>
          <NoContactsMessage>Não há contatos para exibir.</NoContactsMessage>
        </Wrapper>
      ) : (
        <ContactListContainer>
          {contacts.map((contact) => (
            <ContactItemContainer
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              data-testid="contact"
            >
              <ContactAvatar
                src={contact.image}
                alt={`${contact.firstName} ${contact.lastName}`}
              />
              <div>
                {contact.firstName} {contact.lastName}
              </div>
            </ContactItemContainer>
          ))}
        </ContactListContainer>
      )}
      <Modal isOpen={!!selectedContact} onRequestClose={closeModal}>
        {selectedContact && (
          <ContactDetails contact={selectedContact} onClose={closeModal} />
        )}
      </Modal>
    </>
  );
};

export default ContactsList;
