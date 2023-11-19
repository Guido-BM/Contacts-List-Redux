import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ContactList = () => {
  // Obtener la lista de contactos del estado de Redux
  const contacts = useSelector((state) => state.auth.contacts);

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
      <ul>
        {contacts.map((contact) => (
          <li key={`${contact.firstName}-${contact.lastName}`}>
            {contact.firstName} {contact.lastName} - {contact.email}
          </li>
        ))}
      </ul>
      <Link to="/">Home</Link> <Link to="/AddContact">Add Contact</Link>
    </div>
  );
};

export default ContactList;
