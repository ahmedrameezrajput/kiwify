/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
