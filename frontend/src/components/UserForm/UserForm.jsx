import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const UserForm = () => {
  const { updateUser, userId, users } = useContext(UserContext);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  let [user, setUser] = useState({});

  useEffect(() => {
    user = users.filter((user) => user.id === userId);
    setUser(...user);
    console.log(user);
  }, []);

  const handlelastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleUser = () => {
    const newUser = {
      id: user.id,
      lastName: lastName,
      firstName: firstName,
      email: email,
      address: address,
      city: city,
    };
    updateUser(newUser);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">Edit User</div>
          <form action="/">
            <div className="field">
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handlelastNameChange}
                required
              ></input>
              <label>Last Name</label>
            </div>
            <div className="field">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              ></input>
              <label>First Name</label>
            </div>
            <div className="field">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              ></input>
              <label>Email Address</label>
            </div>
            <div className="field">
              <input
                type="text"
                name="address"
                value={address}
                onChange={handleAddressChange}
                required
              ></input>
              <label>Address</label>
            </div>
            <div className="field">
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleCityChange}
                required
              ></input>
              <label>City</label>
            </div>
            {/* <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me"></input>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div> */}
            <div>
              <input
                type="submit"
                value="Update User"
                className="button-30_form"
                onClick={() => handleUser(user)}
              ></input>
            </div>
            <div className="signup-link">
              Return to <Link to={"/"}>Dashboard</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
