import React from "react";
import './ProductsMainPage.css';
import Product from './Product';
import ProductData from '../data-collection/ProductList';

export default function ProductsMainPage({handleAddClick}) {
    
    const productList = ProductData.map(product =>{
           return( <Product 
                key = {product.id}
                id = {product.id}
                title = {product.title}
                price = {product.price}
                rating = {product.rating}
                image = {product.image}
                handleAddClick = {handleAddClick}
            />
    )}
    ) ;

    return(
        <>
            <div className="banner">
                <img className="banner__image col-12 col-lg-10 m-1" src="../images/homepage_banner.jpg" />
            </div>
            <div className="products">

                {productList}
            
            </div>
        </>
    )
}