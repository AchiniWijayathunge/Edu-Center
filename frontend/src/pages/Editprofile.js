import React, { useState, useEffect } from "react";
import axios from 'axios';
import {BrowserRouter, Link, NavLink, Switch, Route, Redirect, Alert} from 'react-router-dom';
const Edit = () => {
  const [isDataChanged, setDataChanged] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  // const [role, setRole] = useState(user?.user.role);
  const [firstName, setFirstName] = useState(user?.user.firstName);
  const [middleName, setMiddleName] = useState(user?.user.middleName);
  const [lastName, setLastName] = useState(user?.user.lastName);
  const [birthday, setBirthday] = useState(user?.user.birthday);
  const [address, setAddress] = useState(user?.user.address);
  const [school, setSchool] = useState(user?.user.school);
  const [telephone, setTelephone] = useState(user?.user.telephone);
  const [email, setEmail] = useState(user?.user.email);
  console.log(user)
const id = user.user._id
  console.log("BABA Blacksheep", user.user.firstName);



  function saveChanges(e) {
    setDataChanged(false);
    console.log("button click", e);
    var data= {
      
      
      "firstName": firstName,
      "middleName": middleName,
      "lastName": lastName,
      "birthday": birthday,
      "address": address,
      "school": school,
      "telephone": telephone,
      
      
      "__v": 0
  }
    axios
      .patch(`http://localhost:4000/api/user/updateUser/${id}`,data)
      .then(
        (response) => {
          console.log("talalallallla", response.status);
          if (setDataChanged(true)) 
          {
            window.alert("User Update sucessfully");
            window.location.reload();
            
          }
        },
        (error) => {
          window.alert(error.response.data.error);
        }
      );
     
  }
  return (  
    <div>
        
      <h2>Welcome to Edit Profile...</h2>
      <p>
        <label>
          First Name :{" "}
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Middle Name :{" "}
          <input
            type="text"
            name="middleName"
            onChange={(e) => setMiddleName(e.target.value)}
            value={middleName}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Birthday:{" "}
          <input
            type="text"
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Address :{" "}
          <input
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
        </label>
      </p>{" "}
      <p>
        <label>
          School :{" "}
          <input
            type="text"
            name="school"
            onChange={(e) => setSchool(e.target.value)}
            value={school}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Telephone:{" "}
          <input
            type="text"
            name="telephone"
            onChange={(e) => setTelephone(e.target.value)}
            value={telephone}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </label>
      </p>
      <button onClick={saveChanges}>Save</button>
    </div>
  );
};
export default Edit;
