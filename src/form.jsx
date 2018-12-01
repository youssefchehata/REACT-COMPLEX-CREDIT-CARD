import React, { Component } from "react";
// import './form.css';

class Form extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: "0 auto" }}>
        <input
          type="number"
          placeholder="type your card Number..."
          onChange={this.props.numero}
        />
        <input
          type="text"
          placeholder="type your Name..."
          onChange={this.props.nom}
        />
        <input
          type="number"
          placeholder="type your date..."
          onChange={this.props.date}
          maxLength="5"
        />
      </div>
    );
  }
}
{
  /* <input  type="number" placeholder="type your date..."  onChange={this.props.date} maxLength='4'/> */
}

export default Form;
