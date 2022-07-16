import { createContext, useState, useEffect } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const URL = "https://pugcharles-crud-with-node.herokuapp.com/api/users";

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [users]);

  const deleteUser = async (id) => {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  };

  const updateUser = async (user) => {
    const { id, lastName, firstName, email, address, city } = user;
    const response = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: {
        lastName: lastName,
        firstName: firstName,
        email: email,
        address: address,
        city: city,
      },
    });
    return response.json();
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        deleteUser,
        updateUser,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
