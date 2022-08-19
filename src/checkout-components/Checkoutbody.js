import React from 'react';
import Addeditem from '../checkout-components/Addeditem.js';
import './Checkoutbody.css' ;


export default function Checkoutbody({handleSubtractClick, handleAddClick, addToBasket, handleChange}) {
    
    const checkoutItems = addToBasket.map(item => {

                            return (
                                <Addeditem 
                                    key = {item.id}
                                    id = {item.id}
                                    title = {item.title}
                                    price = {item.price}
                                    rating = {item.rating}
                                    image = {item.image}
                                    qty = {item.qty}
                                    handleAddClick={handleAddClick}
                                    handleSubtractClick = {handleSubtractClick}
                                    handleChange = {handleChange}
                                />
                        )})

    let totalQty = 0
    addToBasket.forEach(element => {
        totalQty += element.qty
    });
                                                
    const totalPriceEachItem = addToBasket.map(product =>{
        return product.qty * product.price
    })

    let subTotal = 0;
    totalPriceEachItem.forEach(product => {
        subTotal += product;
    })

    let dollarUSLocale = Intl.NumberFormat('en-US');

    return(
        <div>
            <h1 className='text-start mt-5 ms-3'><i className="cart text-warning rounded-3 fs-2 px-2 mx-3 bi bi-cart3"></i>Shopping Cart</h1>
            <hr />
            {addToBasket.length == 0 ? 
                <div className="mt-5">
                    <h1>Shopping cart is empty...</h1>
                    <img className='imge' src="../images/empty_cart.jpeg" />
                </div>
                :
                <div className="d-lg-flex justify-content-evenly">
                <div className="col-lg-8 col-10 mx-auto">
                    {checkoutItems}
                </div>
                <div className="sticky-bottom height checkout__total text-end px-3 py-2 bg-light border col-lg-3 col-10 mx-auto">
                    <h2 className="d-inline me-2">Subtotal</h2><span className='fs-4'>({totalQty}{totalQty === 1 ? " item" : " items"})</span>
                    <h5 className="mt-3"><small>$</small><strong className='fs-3 text-primary'>{dollarUSLocale.format(subTotal)}</strong></h5>
                    <button className='btn btn-warning py-1 px-4 mt-3 fw-bold fs-5'>Pay</button>
                </div>
            </div>
            }
            
            
        </div>
    )
}