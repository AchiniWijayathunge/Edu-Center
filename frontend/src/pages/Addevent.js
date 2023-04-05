import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import SignIn from './Timetables';

const Addevent = ({ setUser }) => {
  const [title, settitle] = useState("");
  const [day, setday] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("call");
    if(user){
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/timetables/", {
        title: title,
        day: day,
        email: email,
        subject: subject,
        time:time,
      })
      .then(
        (response) => {
          console.log(response.status);
          if (response.status == 200) {
            window.alert("Event added sucessfully")
            window.location.reload();
            navigate("../Timetables", { replace: true });
          } 
        },
        (error) => {
          window.alert(error.response.data.error);
        }
      );}
      console.log(title);
    console.log(email);
    console.log(subject);
  
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add Event</h5>
        <div className="form-row">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="day" className="form-label">
            Day
          </label>
          <input
            type="text"
            className="form-input"
            id="day"
            value={day}
            onChange={(e) => setday(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="Subject" className="form-label">
            Subject
          </label>
          <input
            type="Subject"
            className="form-input"
            id="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            className="form-input"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        
        
        <button type="submit" className="btn btn-block">
          Add
        </button>
      </form>
    </section>
  );
};
export default Addevent;
