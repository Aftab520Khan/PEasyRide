import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error } from "./components/Error";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Select } from "./components/Register/Select";
import { Signup } from "./components/Signup";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/se" element={<Select/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
