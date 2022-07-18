import { createContext, useState, useEffect } from "react";

export const UserContext = createContext([]);

export const UserContextProvider = ({ children }) => {
  const URL = "https://crud-with-node-production.up.railway.app/api/users";

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

  const postUser = async (user) => {
    const jsonData = {
      ...user,
    };

    console.log(jsonData);

    const response = await fetch(`${URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(jsonData),
    });

    return response.json();
  };

  const updateUser = async (id, user) => {
    const jsonData = {
      ...user,
    };

    console.log(jsonData);

    const response = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(jsonData),
    });

    return response.json();
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        deleteUser,
        postUser,
        updateUser,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
