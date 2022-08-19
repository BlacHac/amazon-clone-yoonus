import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({addToBasket}) {

    let totalQty = 0
    addToBasket.forEach(element => {
        totalQty += element.qty
    });

    return(
    <div>

        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
                <img className="header__logo" src="../images/amazon_logo.png" />
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <i className="bi bi-search header__searchIcon"></i>
            </div>
        
            {/* 3 links + cart */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header_option__lineOne">Hello Yuna</span>
                        <span className="header_option__lineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header_option__lineOne">Returns</span>
                        <span className="header_option__lineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header_option__lineOne">Your</span>
                        <span className="header_option__lineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div>
                        <i className="bi bi-cart-check-fill header__shopping"></i>
                        <span className="header_option__lineTwo">
                            {totalQty}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>

    </div>
    )
}