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
        <Route path="/kiwify" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <Login />
    </div>
  );
}

export default App;
