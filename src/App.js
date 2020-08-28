import React from "react";
import shortid from "shortid";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Alert from "./components/Alert";
import "./app.scss";

import { CSSTransition } from "react-transition-group";

const LS_KEY = "react-hw-3";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
    isMounted: false,
    isAlertShown: false,
    alertMessage: "",
  };

  removeContact = (id) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: newContacts,
    });
    this.addToLocalStorage(newContacts);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = ({ name, number }) => {
    if (name.trim() === "" || number.trim() === "") {
      this.handleAlert("Name and number must be provided.");
      return;
    }
    const check = this.state.contacts.find((contact) => contact.name === name);
    check
      ? this.handleAlert("You already have " + name)
      : this.setState(
          {
            contacts: [
              ...this.state.contacts,
              {
                name,
                number,
                id: shortid.generate(),
              },
            ],
          },
          () => {
            this.addToLocalStorage(this.state.contacts);
          }
        );
  };

  handleAlert(message) {
    this.setState({ isAlertShown: true, alertMessage: message });
    setTimeout(() => {
      this.setState({ isAlertShown: false });
    }, 3000);
  }

  addToLocalStorage(item) {
    localStorage.setItem(LS_KEY, JSON.stringify(item));
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (contacts) {
      this.setState({
        contacts: [...contacts],
      });
    }
    this.setState({ isMounted: true });
  }

  render() {
    return (
      <div className="phonebook">
        <CSSTransition
          in={this.state.isMounted}
          timeout={500}
          classNames="title"
          mountOnEnter
        >
          <h2 className="title">Phonebook</h2>
        </CSSTransition>
        <ContactForm formSubmit={this.handleSubmit} />
        {this.state.contacts.length > 1 ? (
          <Filter
            filterChange={this.handleChange}
            filterVal={this.state.filter}
          />
        ) : null}

        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          remove={this.removeContact}
        />
        <Alert
          isShown={this.state.isAlertShown}
          info={this.state.alertMessage}
        />
      </div>
    );
  }
}

export default App;
