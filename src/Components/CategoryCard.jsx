import React from "react";


const CardProduct = ({title, description, Image}) => {
  return (
    <>
      <div className="card-img-top shadow mb-5 bg-body rounded" >
        
      <img  src={Image} alt="" 
      className="card-img"/>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>

        <span className="card-title">{description}</span>
      </div>
      
    </>
  );
};
export default CardProduct;
