import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    const { title, color, message, onClick } = this.props;
    onClick(title, color, message);
  };

  render() {
    const { text, color, className } = this.props;
    return (
      <button
        className={className}
        style={{ backgroundColor: color }}
        onClick={this.handleClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
