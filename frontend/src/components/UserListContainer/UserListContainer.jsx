import React from "react";
import UserList from "./UserList/UserList";
import { Link } from "react-router-dom";

const UserListContainer = () => {
  return (
    <div className="container">
      <UserList />
      <br />
      <Link to={"/form"} style={{ textDecoration: "none" }}>
        <button
          className="button-30"
          style={{ width: "100%", margin: "0 auto" }}
        >
          User Form
        </button>
      </Link>
    </div>
  );
};

export default UserListContainer;
