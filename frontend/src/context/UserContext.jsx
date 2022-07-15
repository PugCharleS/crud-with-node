import { createContext, useState, useEffect } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://pugcharles-crud-with-node.herokuapp.com/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
