import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ContactView = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Contact Info</h1>
      <p>
        {state.firstName} {state.lastName}
      </p>
      <Link to="/">Home</Link> <Link to="/AddContact">Add Contact</Link>
    </div>
  );
};
export default ContactView;
