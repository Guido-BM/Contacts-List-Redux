import React from "react";
import { Link } from "react-router-dom";
import AddContactForm from "../components/AddContactForm";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/AuthReducers";

const AddContact = () => {
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    console.log(newContact);
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <AddContactForm onFinish={handleAddContact} />
      <Link to="/">Home</Link> <Link to="/ContactList">Contact List</Link>
    </div>
  );
};

export default AddContact;
