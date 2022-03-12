import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";

// Styles
import "./App.css";
import "./styles/Views.css";
import "./styles/Auth.css";
import "./styles/Button.css";
import "./styles/Dashboard.css";

// Components and Views
import LoginAuth from "./views/Authentication/LoginAuth";
// Dashboard Components
import Dashboard from "./views/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Auth Routes */}
          <Route path="/login" element={<LoginAuth />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
