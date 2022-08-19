import React from "react";
import Header from "../home-components/Header";
import ProductsMainPage from "../home-components/ProductsMainPage";

export default function Home({handleAddClick, addToBasket}) {

    document.title ="Amazon.com. Spend less, Smile more"

    return(
        <div>
            <div className="sticky-top">
                <Header addToBasket={addToBasket} />
            </div>
            <ProductsMainPage handleAddClick={handleAddClick} />
        </div>
    )
}