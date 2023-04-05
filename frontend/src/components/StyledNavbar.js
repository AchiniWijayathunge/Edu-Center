import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import { Dropdown } from "antd";

const Navbar = () => {
  const { logout } = useLogout();
  const { user  } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  console.log("my user name",user?.user?.role);
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>

      <NavLink
        to="/teachers"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Teachers
      </NavLink>

      <NavLink
        to="/timetables"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Timetables
      </NavLink>

      {!user && (
          <div>
      <NavLink
        to="/SignIn"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        SignIn
      </NavLink>
      {/* <NavLink to="/Addings" className={({isActive}) =>isActive?'link active' : 'link' }>Addings</NavLink> */}
      <NavLink
        to="/SignUp"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        SignUp
      </NavLink>
      </div>
      
        )}
        
      <nav>
        {user?.user?.role==="student" && (
          <div>
            <span>
              <div class="dropdown">
                <button class="dropbtn">
                  <img
                    src="assets/images/pngtree-vector-avatar-icon-png-image_313572.jpg"
                    alt=""
                    class="My profile"
                  ></img>
                  <i class="fa fa-caret-down"></i>
                  <div>
                    {" "}
                    <div class="dropdown-content">
                      <Link to="/Editprofile">Edit Profile</Link>
                      <Link to="/MyClasses">My Classes</Link>
                      <Link to="/TestMarks">Test Marks</Link>
                   
                    </div>
                  </div>
                </button>
              </div>
            </span>
           
          </div>
        )}
  {user  && (
<button onClick={handleClick}>Logout</button>
  )}
      </nav>
      
    </nav>
    
  );
};
export default Navbar;
