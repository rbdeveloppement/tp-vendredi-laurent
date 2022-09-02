import React from "react";
import "./App.css";
import Home from "./pages/HomeScreen";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import CategoryCard from './Components/CategoryCard'

function App() {

const productdescriptif = [
  { id:"1", title: "produit 1",description :"lorem", imageId :"237"},
  { id:"2", title: "produit 2",description :"lorem", imageId :"1002"},
  { id:"2", title: "produit 2",description :"lorem", imageId :"1002"},
  { id:"2", title: "produit 2",description :"lorem", imageId :"1002"}
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
