import React from "react";

import Header from "./Header";
import Filter from "./Filter"
import Product from "./Products"
import MyBasket from "./MyBasket"

function Container(){
    return(
        <div>
            <Header /> 
            <Filter />
            <Product />
            <MyBasket />
        </div>
    )
}
export default Container

