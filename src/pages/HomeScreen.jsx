import React from "react";
import SwitchColor from "../Components/switchColor/SwitchColor";
import CategoryCard from "../Components/CategoryCard";
import productdescriptif from "../Data/category.data";
import ContactForm from "../Components/ContactForm/ContactForm";


const HomeScreen = ({ isDark, setIsDark }) => {
  const category = productdescriptif.map((product, id) => (
    <div className="col-12 col-lg-3" key={id}>
      <CategoryCard
        title={product.title}
        description={product.description}
        Image={product.Image}
      />
    </div>
  ));

  return (
    <>
    <div className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div>
        <h1>La boutique de Rémi Bernier</h1>
      </div>
      
      <div className="product-container container">
        <div className="row">{category}</div>
      </div>
      <ContactForm setIsDark={setIsDark} isDark={isDark} />
      </div>
    </>
  );
};
export default HomeScreen;
