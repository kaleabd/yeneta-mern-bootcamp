import React, {useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={isLogged ? <Home /> : <Navigate to='/login' replace={true}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
