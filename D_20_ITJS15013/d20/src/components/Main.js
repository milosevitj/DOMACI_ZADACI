import React, { Component } from "react";
import Form from "./Form";

class Main extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Form
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Main;
