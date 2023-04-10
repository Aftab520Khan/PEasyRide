import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error } from "./components/Error";
import { Footer } from "./components/MainPage/Footer";
import { Header } from "./components/MainPage/Header";
import { Home } from "./components/MainPage/Home";
import { Login } from "./components/Rpages/Login";
import { Signup } from "./components/Rpages/Signup";
import { MApply } from "./components/Mechanic/MApply";
import { ContactUs } from "./components/MOther/ContactUs";
import { Cars } from "../src/components/CarRegister/Car/Cars";
import { Admin } from "./components/Admin/Admin";
import { User } from "./components/Admin/User";
import { Mechanic } from "./components/Admin/Mechanic";
import { Selected } from "./components/CarRegister/Selected";
import { PPI } from "./components/servies/PPInspection/PPI";
import { Diagno } from "./components/servies/Diagnostics/Diagno";
import { Repairss } from "./components/servies/Repairs/Repairss";
import { Protected } from "./components/Protected";
import { Public } from "./components/Public";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              
                <Home />
              
            }
          />
          <Route path="/se" element={<Selected />} />
          <Route
            path="/login"
            element={
              
                <Login />
              
            }
          />
          <Route path="*" element={<Error />} />
          <Route
            path="/signup"
            element={
             
                <Signup />
              
            }
          />
          <Route path="/repair" element={<Repairss />} />
          <Route path="/diagnostics" element={<Diagno />} />
          <Route path="/ppi" element={<PPI />} />
          <Route path="/mapply" element={<MApply />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking/car" element={<Cars />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/mechanic" element={<Mechanic />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
