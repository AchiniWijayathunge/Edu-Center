import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Addteachers = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[subject, setSubject] =  useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/dashboard');
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h5>Add Teachers</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Teacher's Name  
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
           email 
          </label>
          <input
            type="email"
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
        <button type="submit" className="btn btn-block">
          Add
        </button>
      </form>
    </section>
  );
};
export default Addteachers;

