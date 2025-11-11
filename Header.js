// src/components/Header.js
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { name, address, phone, email } = this.props;
    return (
      <div className="header">
        <h2>Resume Details</h2>
        <p><b>Name:</b> {name}</p>
        <p><b>Address:</b> {address}</p>
        <p><b>Phone No:</b> {phone}</p>
        <p><b>Email:</b> {email}</p>
      </div>
    );
  }
}

export default Header;
