import { createContext, useState, useEffect } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const URL = "https://pugcharles-crud-with-node.herokuapp.com/api/users";

  const [users, setUsers] = useState([]);

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
    const response = await fetch(`${URL}/${user.id}`, {
      method: "PATCH",
    });
    console.log(response.json());
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
