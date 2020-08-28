import React from "react";

import PropTypes from "prop-types";

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
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__name">
          Name
          <input
            className="form__name--input"
            id="name"
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
          />
        </label>
        <label className="form__number">
          Number
          <input
            className="form__number--input"
            id="number"
            onChange={this.handleChange}
            type="text"
            value={this.state.number}
          />
        </label>
        <button className="form__submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  formSubmit: PropTypes.func,
};
