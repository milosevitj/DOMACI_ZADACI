import React, { Component } from "react";
import Button from "./Buttons";

class Main extends Component {
  state = {
    title: "Hello",
    textColor: "red",
    messageIndex: 0,
    messages: ["Welcome!", "Thank you for visiting.", "Have a nice day!"],
  };

  handleButtonClick = (color) => {
    this.setState((prevState) => {
      const messageIndex =
        prevState.messageIndex === 2 ? 0 : prevState.messageIndex + 1;
      return {
        title: prevState.title,
        textColor: color,
        messageIndex: messageIndex,
      };
    });
  };

  render() {
    const { title, textColor, messages, messageIndex } = this.state;
    return (
      <div>
        <h1 style={{ color: textColor }}>{title}</h1>
        <Button
          className="btn-red"
          text="Red button"
          color="red"
          onClick={() => this.handleButtonClick("red")}
        />
        <Button
          className="btn-blue"
          text="Blue button"
          color="blue"
          onClick={() => this.handleButtonClick("blue")}
        />
        <Button
          className="btn-green"
          text="Green button"
          color="green"
          onClick={() => this.handleButtonClick("green")}
        />
        <p style={{ color: textColor }}>{messages[messageIndex]}</p>
      </div>
    );
  }
}

export default Main;
