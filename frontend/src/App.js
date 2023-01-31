import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Timetables from "./pages/Timetables";
import SignIn from "./pages/SignIn";
import Addings from "./pages/Addings";
import Classes from "./pages/Classes";
import SignUp from "./pages/SignUp";
import SharedLayout from "./pages/SharedLayout";



function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<Teachers/>} />
          <Route path="/timetables" element={<Timetables/>} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="signin" element={<SignIn />} />

          <Route path="/Addings" element={<Addings/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;