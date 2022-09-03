import React from "react";
import "./App.css";
import Home from "./pages/HomeScreen";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CategoryCard from './Components/CategoryCard'

function App() {

const productdescriptif = [
  {title: "Femmes",description :"la mode pour elles", Image:"./assets/femmes.jpg"},
  {title: "Hommes",description :"la mode pour lui", image :"../assets/hommes.jpg"},
  {title: "Enfants",description :"la mode pour eux", image :"../assets/enfants.jpg"},
  {title: "Bébés",description :"la mode pour eux aussi", image :"../assets/bebe.jpg"}
];
const category = productdescriptif.map((product) => 
  <div className="col-12 col-lg-3" key={product.id}>
  <CategoryCard title={product.title} description={product.description} imageId={product.imageId}/>
  </div>
)





  return (
    <div>
      <div>
        <Home />
      </div>
      <div className="product-container container">
        <div className="row">
        {category}
        </div>
      </div>
    </div>
  );
}

export default App;
