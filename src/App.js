import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import "bootstrap/dist/css/bootstrap.css"
import ProductList from "./data-collection/ProductList";


export default function App() {

  const [buyItem, setBuyItem] = useState([]);

  function findTheItem({id}){
    return ProductList.find(product => product.id === id)
  }

  function addItemBasket(event) {
    const newProduct = findTheItem(event.target)

    setBuyItem(prevBuyItem => {
      newProduct.qty += 1;
      const prevArr = [...prevBuyItem, newProduct]
      const filteredBuyItem = Array.from(new Set(prevArr))
      return filteredBuyItem
    })
  }

  function removeItemBasket(event) {

    const removeProduct = findTheItem(event.target)

    setBuyItem(prevBuyItem => {
      removeProduct.qty -= 1;
      const index = prevBuyItem.findIndex(product => product.id == removeProduct.id);
      const afterRemovedItem = [...prevBuyItem]
      if(removeProduct.qty === 0){
        afterRemovedItem.splice(index,1)
      }
      return afterRemovedItem
    })
  }

  function inputQtyChange(event) {
    const changeProduct = findTheItem(event.target)
    setBuyItem(prevBuyItem =>{
      const index = prevBuyItem.findIndex(product => product.id == changeProduct.id);
      const afterChangedItem = prevBuyItem.map(product =>{
        if(product.id === event.target.id){
          product.qty =  parseInt(event.target.value)
        }
        return product
      })
      if(changeProduct.qty === 0){
        afterChangedItem.splice(index,1)
      }
      return afterChangedItem
    })
  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route>
            
            <Route path="/login" element=
            {<Login />} />

            <Route path="/signup" element=
            {<SignUp />} />

            <Route index element=
            {<Home  
            handleAddClick={addItemBasket} 
            addToBasket={buyItem} />} 
            />

            <Route path="/checkout" element =
            {<Checkout 
            handleAddClick={addItemBasket}
            handleSubtractClick={removeItemBasket} 
            addToBasket={buyItem} 
            handleChange={inputQtyChange} />}
            />
          
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

