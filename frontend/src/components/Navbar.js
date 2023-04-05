import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/teachers">Teachers</Link>
      <Link to="/timetables">Timetables</Link>
      <Link to="/SignIn">SignIn</Link>
      <Link to="/SignUp">SignUp</Link>
      
      <Link to="/Addings">Addings</Link>
    </nav>
  );
};

export default Navbar;