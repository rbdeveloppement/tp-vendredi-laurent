import React from "react";



const CardProduct = ({ title, description, Image, isDark}) => {
  return (
<>
   

    <div className={`${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>

      <img src={Image} alt="" className="card-img " />

      <div className="card-body p-3">
        <h5 className="card-title py-2">{title}</h5> {/* py=padding vertical */}
        <span className="card-title">{description}</span>
      </div>
    </div>
  
    </>
  );
};

export default CardProduct;
