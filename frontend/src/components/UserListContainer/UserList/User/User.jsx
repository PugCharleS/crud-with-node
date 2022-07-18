import React, { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, lastName, firstName, email, address, city } = user;
  const { deleteUser, setUserId } = useContext(UserContext);

  const editUser = () => {
    setUserId(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>
        <Link to={"/edit-form"} style={{ textDecoration: "none" }}>
          <button className="button-30" onClick={() => editUser(id)}>
            Edit
          </button>
        </Link>
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
