import React, { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

const User = ({ user }) => {
  const { id, lastName, firstName, email, address, city } = user;
  const { users, setUsers, deleteUser } = useContext(UserContext);

  return (
    <tr>
      <td>{id}</td>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>
        <button className="button-30">Edit</button>
      </td>
      <td>
        <button className="button-30_delete" onClick={() => deleteUser(id)}>
          X
        </button>
      </td>
    </tr>
  );
};

export default User;
