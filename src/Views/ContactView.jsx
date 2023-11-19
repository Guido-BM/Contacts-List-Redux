import React from "react";
import { Link } from "react-router-dom";

const ContactView = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <Link to="/">Home</Link> <Link to="/AddContact">Add Contact</Link>
    </div>
  );
};
export default ContactView;
