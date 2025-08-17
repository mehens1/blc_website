import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/layout/appLayout";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/contact" element={<Contact />} /> */} 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;