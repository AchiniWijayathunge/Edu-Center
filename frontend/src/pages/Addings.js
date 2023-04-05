import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

const Addteachers = ({ setUser }) => {
  const [title, settitle] = useState("");
  const [teacher_id, setteacher_id] = useState("");
  const [subject, setSubject] = useState("");

  const navigate = useNavigate();
  const {user} = useAuthContext()
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/teachers/", {
        title: title,
        teacher_id: teacher_id,
        subject: subject,
        
      })
      .then(
        (response) => {
          console.log(response.status);
          if (response.status == 200) {
            window.alert("User added sucessfully");
            navigate("../SignIn", { replace: true });
          }
        },
        (error) => {
          window.alert(error.response.data.error);
        }
      );
    console.log(title);
    console.log(teacher_id);
    console.log(subject);
  };

  return (
    <section className="section">
     {user && (
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add Teachers</h5>
        <div className="form-row">
          <label htmlFor="title" className="form-label">
            Teacher's Name
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
          <label htmlFor="teacher_id" className="form-label">
          
          Teacher_id
          </label>
          <input
            type="text"
            className="form-input"
            id="teacher_id"
            value={teacher_id}
            onChange={(e) => setteacher_id(e.target.value)}
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
        <button type="submit" className="btn btn-block">
          Add
        </button>
      </form>
     )}
    </section>
  );
};
export default Addteachers;
