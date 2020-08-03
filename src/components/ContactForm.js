import React from "react";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            id="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input
            id="number"
            onChange={this.handleChange}
            type="text"
            value={this.state.number}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
