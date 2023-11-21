import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ContactList from "./views/ContactList";
import AddContact from "./views/AddContact";
import Login from "./views/Login";
import ContactView from "./views/ContactView";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const App = () => {
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
            path="/contact/:id"
            element={
              <PrivateRoute>
                <ContactView />
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
