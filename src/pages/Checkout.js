import React from 'react';
import Checkoutbody from '../checkout-components/Checkoutbody.js';
import Header from '../home-components/Header';

export default function Checkout({handleAddClick, handleSubtractClick, addToBasket, handleChange}) {

    document.title ="Amazon.com - Checkout"

    return(
        <div>
            <div className="sticky-top">
                <Header 
                addToBasket={addToBasket} 
                />
            </div>
            <Checkoutbody 
            handleSubtractClick={handleSubtractClick} 
            handleAddClick={handleAddClick}  
            addToBasket={addToBasket}
            handleChange={handleChange} />
            
        </div>
    )
}