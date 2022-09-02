import React from "react";
import "./App.css";
import Home from "./pages/HomeScreen";
import CardProduct from "./Components/CategoryCard";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div className="product-container container">
        <CardProduct />
      </div>
    </div>
  );
}

export default App;
