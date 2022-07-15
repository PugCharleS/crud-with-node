import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import User from "./User/User";

const UserList = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
