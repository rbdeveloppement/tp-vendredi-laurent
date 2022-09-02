import React from "react";


const CardProduct = () => {
  return (
    <>
      <div className="card col-3">
        
        <img src="./img/chien.jpg"
         className="card-img-top " />
        <div className="card-body">
          <h5 className="card-title">titre</h5>
        </div>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam magnam perferendis quae reiciendis,
             sit debitis, blanditiis odio voluptatem quibusdam dignissimos ratione quidem atque quaerat aliquid accusamus dolorem quas fugiat?</span>
      </div>
    </>
  );
};
export default CardProduct;
