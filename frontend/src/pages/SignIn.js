import { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, error, isLoading } = useSignIn();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Login(email, password,navigate);
  };
  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="form-row"></div>
        <label htmlFor="name" className="form-label">
          Email
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="form-row"></div>
        <label htmlFor="name" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="form-row"></div>
        <button disabled={isLoading} className="btn btn-block">
          Sign In
          {error && <div className="error">{error}</div>}
        </button>
      </form>
    </section>
  );
};

export default SignIn;
