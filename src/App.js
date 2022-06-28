import React, { useContext } from "react";
import Login from "./Login/Login.jsx";
import Home from "./pages/home/Home.js";
import Profile from "./Profile/Profile.js";
import Register from "./Register/Register.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext.js";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/feed" element={user ? <Home /> : <Register />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/feed" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
    // <Topbar/>
  );
}

export default App;
