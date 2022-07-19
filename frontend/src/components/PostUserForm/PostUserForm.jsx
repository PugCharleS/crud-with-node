import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const PostUserForm = () => {
  const { postUser } = useContext(UserContext);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

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
      lastName: lastName,
      firstName: firstName,
      email: email,
      address: address,
      city: city,
    };
    postUser(newUser);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">User Form</div>
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
            <div>
              <input
                type="submit"
                value="Post User"
                className="button-30_form"
                onClick={() => handleUser()}
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

export default PostUserForm;
