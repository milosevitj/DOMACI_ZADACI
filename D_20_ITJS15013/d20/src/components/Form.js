import React, { Component } from "react";

class Form extends Component {
  render() {
    const { firstName, lastName, email, password, handleInputChange } =
      this.props;

    return (
      <div>
        <h1>Enter your data:</h1>
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email adress:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
