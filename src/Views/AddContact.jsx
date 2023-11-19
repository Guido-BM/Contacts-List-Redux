import React from "react";
import { Link } from "react-router-dom";
import AddContactForm from "../Components/AddContactForm";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/AuthActions"; // Importa la acción addContact

const AddContact = () => {
  const dispatch = useDispatch();

  // Función que manejará el envío del formulario
  const handleAddContact = (contact) => {
    // Hacer dispatch de la acción para añadir el contacto
    dispatch(addContact(contact));
    // Puedes agregar otras acciones o redireccionar si es necesario
  };

  return (
    <div>
      <h1>Add Contact</h1>
      {/* Pasa la función handleAddContact como prop onFinish al componente AddContactForm */}
      <AddContactForm onFinish={handleAddContact} />
      <Link to="/">Home</Link> <Link to="/ContactList">Contact List</Link>
    </div>
  );
};

export default AddContact;
