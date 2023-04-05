import { useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Timetables from "./pages/Timetables";
import SignIn from "./pages/SignIn";
import Addings from "./pages/Addings";
import Classes from "./pages/Classes";
import SignUp from "./pages/SignUp";
import SharedLayout from "./pages/SharedLayout";
import Addevent from "./pages/Addevent";
import AddClasses from "./pages/AddClasses";
import Editprofile from "./pages/Editprofile";
import MyClasses from "./pages/MyClasses";
import Enroll from "./pages/Enroll";
import { Dropdown } from "antd";

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<Teachers />} />
          <Route path="/timetables" element={<Timetables />} />
          <Route path="/teachers/:id/classes" element={<Classes />} />

          <Route path="/SignIn" element={<SignIn />} />

          <Route
            path="/Addings"
            element={user ? <Addings /> : <Navigate to="/" />}
          />

          <Route path="/SignUp" element={<SignUp />} />

          <Route
            path="/AddClasses"
            element={user ? <AddClasses /> : <Navigate to="/" />}
          />
          <Route
            path="/Addevent"
            element={user ? <Addevent /> : <Navigate to="/" />}
          />
          <Route
            path="/dropdown"
            element={user ? <Dropdown /> : <Navigate to="/" />}
          />
          <Route
            path="/Editprofile"
            element={user ? <Editprofile /> : <Navigate to="/" />}
          />
          <Route
            path="/MyClasses"
            element={user ? <MyClasses /> : <Navigate to="/" />}
          />
          <Route path="/Enroll" element={<Enroll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
