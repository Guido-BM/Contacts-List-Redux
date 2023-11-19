import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "./redux/AuthActions"; // Actualiza las importaciones
import Home from "./Views/Home";
import ContactList from "./Views/ContactList";
import AddContact from "./Views/AddContact";
import Login from "./Views/Login";
import PrivateRoute from "./Components/PrivateRoute";
import "./App.css";
import { authorizedUsers } from "./redux/AuthActions";

const App = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signIn(authorizedUsers[0])); // Puedes usar el primer usuario como ejemplo
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/ContactList"
            element={
              <PrivateRoute>
                <ContactList />
              </PrivateRoute>
            }
          />
          <Route
            path="/AddContact"
            element={
              <PrivateRoute>
                <AddContact />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
