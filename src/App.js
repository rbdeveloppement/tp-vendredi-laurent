import React, { useState } from "react";
import "./App.css";
import Home from "./pages/HomeScreen";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import CategoryCard from "./Components/CategoryCard";
import FormComponent from "./Components/ContactForm/ContactForm";
import Hearder from "./Components/NavBar/NavBar";


function App() {
  const productdescriptif = [
    {
      title: "Femmes",
      description: "la mode pour elles",
      Image: "./assets/img/femmes.jpg",
    },
    {
      title: "Hommes",
      description: "la mode pour lui",
      Image: "./assets/img/homme.jpg",
    },
    {
      title: "Enfants",
      description: "la mode pour eux",
      Image: "./assets/img/enfant.jpg",
    },
    {
      title: "Bébés",
      description: "la mode pour eux aussi",
      Image: "./assets/img/bebe.jpeg",
    },
  ];
  const category = productdescriptif.map((product, id) => (
    <div className="col-12 col-lg-3" key={id}>
      <CategoryCard
        title={product.title}
        description={product.description}
        Image={product.Image}
      />
    </div>
  ));

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div>
        <Home setIsDark={setIsDark} isDark={isDark} />
      </div>
      <div>
        <Hearder/>
      </div>
      <div className="product-container container">
        <div className="row">{category}</div>
        <div>
          <FormComponent setIsDark={setIsDark} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default App;
