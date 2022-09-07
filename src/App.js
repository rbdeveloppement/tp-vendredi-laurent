import React, { useState } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
   <>
      <NavBar setIsDark={setIsDark} isDark={isDark} />
    <Routes>
      <Route path="/home" element={<HomeScreen isDark={isDark}/>}/>
      <Route path="/" element={<HomeScreen isDark={isDark}/>}/>
      <Route path="/*" element={<HomeScreen  isDark={isDark}/>}/>
      <Route path="/products" element={<Products/>}/>
      </Routes>   
        </>
  );
}

export default App;
