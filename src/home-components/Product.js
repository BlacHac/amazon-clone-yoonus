import React from "react";
import "./Product.css";

export default function Product({id, title, price, rating, image, handleAddClick}){

    let dollarUSLocale = Intl.NumberFormat('en-US');

    return (
        <div className="product card bg-light p-3 m-3 col-5 col-lg-2" >
            <div className="product__info">
                <p className="product__title m-0">{title}</p>
                <p className="product__ m-0">
                    <small>$</small>
                    <strong>{dollarUSLocale.format(price)}</strong>
                </p> 
                <div className="product__rating text-warning">
                    {
                    Array(rating)
                    .fill()
                    .map((item, index)=> <i key={index} className="bi bi-star-fill"></i>)
                    }
                </div>
            </div> 
            
            <img src={image} className="product_image col-6 col-lg-5 d-block mx-auto my-3" />    
            
            <button onClick={handleAddClick} id={id} className="mx-auto btn btn-warning btnn">Add to basket</button>    
        
        </div>
    )
}