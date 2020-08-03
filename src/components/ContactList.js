import React from "react";

const ContactList = ({ filter, contacts, remove }) => {
  return (
    <ul>
      {filter === ""
        ? contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                onClick={() => {
                  remove(contact.id);
                }}
              >
                delete
              </button>
            </li>
          ))
        : contacts
            .filter((contact) =>
              contact.name
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase())
            )
            .map((contact) => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  onClick={() => {
                    remove(contact.id);
                  }}
                >
                  delete
                </button>
              </li>
            ))}
    </ul>
  );
};

export default ContactList;
