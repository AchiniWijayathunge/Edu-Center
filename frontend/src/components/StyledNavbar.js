import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
      to='/' 
      className={({isActive}) =>isActive?'link active' : 'link' }
      
      >Home</NavLink>
      <NavLink to="/about" className={({isActive}) =>isActive?'link active' : 'link' }>About</NavLink>
     
      <NavLink to="/teachers" className={({isActive}) =>isActive?'link active' : 'link' }>Teachers</NavLink>
     
      <NavLink to="/timetables" className={({isActive}) =>isActive?'link active' : 'link' }>Timetables</NavLink>
      <NavLink to="/SignIn" className={({isActive}) =>isActive?'link active' : 'link' }>SignIn</NavLink>
      {/* <NavLink to="/Addings" className={({isActive}) =>isActive?'link active' : 'link' }>Addings</NavLink> */}
       <NavLink to="/SignUp" className={({isActive}) =>isActive?'link active' : 'link' }>SignUp</NavLink>
    </nav>
  );
};
export default Navbar;