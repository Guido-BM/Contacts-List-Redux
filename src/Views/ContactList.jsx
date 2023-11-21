import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/AuthReducers";

const ContactList = () => {
  const dispatch = useDispatch();
  // Obtener la lista de contactos del estado de Redux
  const contacts = useSelector((state) => state.contacts);
  // Verificar si contacts es válido
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        <h1>Contact List</h1>
        <p>No hay contactos disponibles.</p>
        <Link to="/">Home</Link> <Link to="/AddContact">Add Contact</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Contact List</h1>
      <ul
        style={{
          display: "grid",
          gap: "10px",
          alignItems: "center",
          justifyItems: "start",
        }}
      >
        {[...contacts]
          .sort((a, b) =>
            (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName)
          )
          .map((contact) => (
            <li key={`${contact.firstName}-${contact.lastName}`}>
              {contact.firstName} {contact.lastName} - {contact.phone}
              <Link to={`/contact/${contact.id}`} state={{ ...contact }}>
                View
              </Link>
              <button
                onClick={() => {
                  dispatch(deleteContact(contact.id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
      <Link to="/">Home</Link> <Link to="/AddContact">Add Contact</Link>
    </div>
  );
};

export default ContactList;
