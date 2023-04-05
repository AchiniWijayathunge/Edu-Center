import { useState, useRef } from "react";
import { useSignUp } from "../hooks/useSignUp";
import { Link, Navigate } from "react-router-dom";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";

const SignUp = () => {
  const checkbox = useRef();
  const [role, setRole] = useState("teacher");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Register, error, isLoading } = useSignUp();
  console.log(firstName, middleName, lastName);
  let navigate = useNavigate();

  const [isTeacher, setisTeacher] = useState(true);
  const [isStudent, setisStudent] = useState(false);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    //setValue(e.target.value);
    // setRole(e.target.value)
    if (e.target.value === "teacher") {
      console.log("✅ Teacher Checkbox is checked");
      setRole("teacher");
      setisStudent(false);
      setisTeacher(!isTeacher);
    } else if (e.target.value === "student") {
      console.log("✅ Student Checkbox is checked");
      setRole("student");
      setisTeacher(false);
      setisStudent(!isStudent);
    }
  };
  // const handleChange = (event) => {
  //   console.log("event.target", event.target.id);
  //   if (event.target.id === "Teacher") {
  //     console.log("✅ Teacher Checkbox is checked");
  //     setRole("teacher");
  //     setisStudent(false);
  //     setisTeacher(!isTeacher);
  //   } else if (event.target.id === "Student") {
  //     console.log("✅ Student Checkbox is checked");
  //     setRole("student");
  //     setisTeacher(false);
  //     setisStudent(!isStudent);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(role);
    await Register(
      role,
      firstName,
      middleName,
      lastName,
      birthday,
      address,
      school,
      telephone,
      email,
      password,
      navigate
    );

    
  };

  return (
    <section className="section">
      <p>
        {" "}
        <h>Sign up as a</h>
      </p>

      <div>
        {/* <label htmlFor="Teacher">
          <input
            type="checkbox"
            value={setRole}
            onChange={handleChange}
            id="Teacher"
            name="Teacher"
          />
          Teacher
        </label>
        <label htmlFor="Student">
          <input
            type="checkbox"
            value={role}
            onChange={handleChange}
            id="Student"
            name="Student"
          />
          Student
        </label> */}
        <Radio.Group onChange={onChange} value={role}>
          <Radio value={"teacher"}>Teacher</Radio>
          <Radio value={"student"}>Student</Radio>
        </Radio.Group>
        <hr />

        {isTeacher && (
          <h5>
            {" "}
            <form className="form" onSubmit={handleSubmit}>
              <h3>Sign Up</h3>

              <div className="form__row"></div>

              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                className="Neg"
                placeholder="First Name (in english)*"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />

              <div className="form__row"></div>

              <label htmlFor="name" className="form-label">
                Middle Name
              </label>
              <input
                className="Neg"
                placeholder="Middle Name (in english)*"
                type="middleName"
                onChange={(e) => setMiddleName(e.target.value)}
                value={middleName}
              />

              <div className="form__row"></div>

              <label htmlFor="name" className="form-label">
                Last Name
              </label>
              <input
                className="Neg"
                placeholder="Last Name (in english)*"
                type="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />

              <div className="form__row"></div>

              <label htmlFor="date" className="form-label">
                Birthday
              </label>
              <input
                className="Neg"
                placeholder=" Birthday"
                type="date"
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
              />

              <div className="form__row"></div>

              <label htmlFor="text" className="form-label">
                Address
              </label>
              <input
                className="Neg"
                placeholder="Permenant address"
                type="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />

              <div className="form__row"></div>

              <label htmlFor="text" className="form-label">
              what school you work at
              </label>
              <input
                className="Neg"
                placeholder="what school you work at"
                type="school"
                onChange={(e) => setSchool(e.target.value)}
                value={school}
              />
              <div className="form__row"></div>

              <label htmlFor="number" className="form-label">
                Telephone
              </label>
              <input
                className="Neg"
                type="number"
                placeholder="Mobile Number"
                onChange={(e) => setTelephone(e.target.value)}
                value={telephone}
              />
              <div className="form__row"></div>

              <label htmlFor="name" className="form-label">
                Email
              </label>
              <input
                className="Neg"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div className="form__row"></div>
              <label htmlFor="name" className="form-label">
                Password
              </label>

              <input
                className="Neg"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="form__row"></div>
              <button className="btn btn-block" disabled={isLoading}>
                Sign up
              </button>

              {error && <div className="error">{error}</div>}
            </form>
          </h5>
        )}
      </div>

      <div>
        {/* <label htmlFor="Student">
          <input
            type="checkbox"
            value={isStudent}
            onChange={handleChange}
            id="Student"
            name="Student"
          />
          Student
        </label> */}

        <hr />

        {isStudent && (
          <h2>
            {" "}
            <form className="form" onSubmit={handleSubmit}>
              <h3>Sign Up</h3>

              <div className="form__row"></div>

              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                className="Neg"
                placeholder="First Name (in english)*"
                type="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />

              <div className="form__row"></div>

              <label htmlFor="middleName" className="form-label">
                Middle Name
              </label>
              <input
                className="Neg"
                placeholder="Middle Name (in english)*"
                type="middleName"
                onChange={(e) => setMiddleName(e.target.value)}
                value={middleName}
              />

              <div className="form__row"></div>

              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                className="Neg"
                placeholder="Last Name (in english)*"
                type="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />

              <div className="form__row"></div>

              <label htmlFor="date" className="form-label">
                Birthday
              </label>
              <input
                className="Neg"
                placeholder=" Birthday"
                type="date"
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
              />

              <div className="form__row"></div>

              <label htmlFor="text" className="form-label">
                Address
              </label>
              <input
                className="Neg"
                placeholder="Permenant address"
                type="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />

              <div className="form__row"></div>

              <label htmlFor="text" className="form-label">
                School
              </label>
              <input
                className="Neg"
                placeholder="Current School"
                type="school"
                onChange={(e) => setSchool(e.target.value)}
                value={school}
              />
              <div className="form__row"></div>

              <label htmlFor="number" className="form-label">
                Telephone
              </label>
              <input
                className="Neg"
                type="number"
                placeholder="Mobile Number"
                onChange={(e) => setTelephone(e.target.value)}
                value={telephone}
              />
              <div className="form__row"></div>

              <label htmlFor="name" className="form-label">
                Email
              </label>
              <input
                className="Neg"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <div className="form__row"></div>
              <label htmlFor="name" className="form-label">
                Password
              </label>

              <input
                className="Neg"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="form__row"></div>
              <button type="submit">Submit</button>

              {error && <div className="error">{error}</div>}
            </form>
          </h2>
        )}
      </div>
    </section>
  );
};

export default SignUp;
