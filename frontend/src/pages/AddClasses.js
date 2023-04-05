import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const AddClasses = ({ setUser }) => {
  const [sub_class_id, setsub_class_id] = useState("");
  const [title, settitle] = useState("");
  const [email, setemail] = useState("");
  const [subject, setSubject] = useState("");
  const [batch, setbatch] = useState("");
  const [date_and_time, setdate_and_time] = useState("");
  const [teacher_id, setteacher_id] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("call");
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/classes/${teacher_id}`, {
        sub_class_id: sub_class_id,
        title: title,
        email: email,
        subject: subject,
        batch: batch,
        date_and_time: date_and_time,
        teacher_id: teacher_id,
      })
      .then(
        (response) => {
          console.log(response.status);
          if (response.status == 200) {
            window.alert("Class added sucessfully");
            navigate("../Teachers", { replace: true });
          }
        },
        (error) => {
          window.alert(error.response.data.error);
        }
      );
    console.log(sub_class_id);
    console.log(title);
    console.log(email);
    console.log(subject);
    console.log(batch);
    console.log(teacher_id);
    console.log(date_and_time);
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add Classes</h5>
        <div className="form-row">
          <label htmlFor="sub_class_id" className="form-label">
            Sub_class_id
          </label>
          <input
            type="text"
            className="form-input"
            id="sub_class_id"
            value={sub_class_id}
            onChange={(e) => setsub_class_id(e.target.value)}
          />
        </div>

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
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="Subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-input"
            id="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="batch" className="form-label">
            batch
          </label>
          <input
            type="text"
            className="form-input"
            id="batch"
            value={batch}
            onChange={(e) => setbatch(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="date_and_time" className="form-label">
            date_and_time
          </label>
          <input
            type="text"
            className="form-input"
            id="date_and_time"
            value={date_and_time}
            onChange={(e) => setdate_and_time(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="teacher_id" className="form-label">
            teacher_id
          </label>
          <input
            type="text"
            className="form-input"
            id=" teacher_id"
            value={teacher_id}
            onChange={(e) => setteacher_id(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddClasses;
