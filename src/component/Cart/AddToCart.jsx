import React from "react";
import { useSelector } from "react-redux";

const baseurl = import.meta.env.VITE_BASE_URL


function AddToCart(){
    const cartitem = useSelector((state)=>state.cart.item)
return(
    <>
    

     {cartitem.map((product,index)=>(
        
        <div key={index} className="col-md-4 mb-4">
        <div className="card h-100 text-center">
          <img
            src={`${baseurl}/uploads/${product.image}`}
            alt={product.title}
            className="card-img-top "
            style={{ height: '300px' }}
          />
          <div className="card-body">
            <p className="card-text">Category: {product.Sub_Category}</p>
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text fw-bold">Price: ${product.price}</p>
            
          </div>

        </div>
      </div>
        
     ))}
      
    </>
)

}


export default AddToCart;