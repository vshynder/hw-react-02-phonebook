import React from "react";
import shortid from "shortid";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./app.css";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  removeContact = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = ({ name, number }) => {
    if (name.trim() === "" || number.trim() === "") {
      alert("Name and number must be provided");
      return;
    }
    const check = this.state.contacts.filter(
      (contact) => contact.name === name
    );
    check.length
      ? alert(`${name} is already in contacts`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            {
              name,
              number,
              id: shortid.generate(),
            },
          ],
        });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm formSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          filterChange={this.handleChange}
          filterVal={this.state.filter}
        />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          remove={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
