import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/loginpage/Login";
import Home from "./pages/homepage/Home";
import Feauture from "./pages/Feauture Page/Feauture";
import Rental from "./pages/Rental page/Rental";
import Aboutus from "./pages/About-us page/Aboutus";
//import NotFound from "./pages/NotFound"; // Create a NotFound component for handling 404 errors

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feauture" element={<Feauture />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/Aboutus" element={<Aboutus />} />

        {/* <Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
