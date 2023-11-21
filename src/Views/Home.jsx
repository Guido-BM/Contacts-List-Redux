import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";

const Home = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <div>
      <h1>Home</h1>
      <Login />
      {isAuthenticated && (
        <>
          <Link to="/ContactList">Contact List</Link>{" "}
          <Link to="/AddContact">Add Contact</Link>
        </>
      )}
    </div>
  );
};
export default Home;
