import React from 'react';
import './Addeditem.css';

let dollarUSLocale = Intl.NumberFormat('en-US');

export default function Addeditem({key, id, title, price, rating, image, qty, handleAddClick, handleSubtractClick, handleChange}) {
    return(
        <div className="checkout__Item bg-light border p-2 d-flex my-2 mx-auto">
            <img className="checkout__ItemImage" src={image} />
            <div className='text-start ms-2'>
                <p className='mb-2'>{title}</p>
                <span className="text-muted">Price</span> <small>$</small><strong>{dollarUSLocale.format(price)}</strong><br/>
                <span>Qty</span>
                <button onClick={handleSubtractClick} id={id}>-</button>
                <input onChange={handleChange} id={id} type="number" name="quantity" value={qty} min={0}/>
                <button onClick={handleAddClick} id={id}>+</button>
            </div>
        </div>
    )
}