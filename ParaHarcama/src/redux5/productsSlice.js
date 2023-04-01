import { createSlice } from "@reduxjs/toolkit";

import product from "../product.json"

export const productsSlice = createSlice({
    name:"product",
    initialState:{
        money : 5000,
        items : product,
        wordToFilter : [],
        filtered : [],
        basket : [],
        total : 0,
    },
    reducers:{
        addWordToFilter : (state , action) =>{
            state.wordToFilter = [...state.wordToFilter , action.payload];
        },
        removeWordToFilter: (state , action) =>{
            state.wordToFilter = state.wordToFilter.filter((data) => data !== action.payload)
        },
        addFiltered : (state , action) => {
            state.filtered = state.wordToFilter;
        },
        addToBasket : (state , action) => {
            state.basket = [...state.basket , action.payload]; 
        },
        removeFromBasket : (state , action) =>{
            state.basket = state.basket.filter((data) => data.id !== action.payload.id)
        },
        increaseAmount : (state , action) =>{   
            state.basket = [...state.basket.filter((data) => data.id !== action.payload.id) , action.payload];            
        },
        decreaseAmount : (state , action) =>{
            state.basket = [...state.basket.filter((data) => data.id !== action.payload.id) , action.payload]
        },
        totalPrice : (state) =>{
            state.total = state.basket.reduce((acc , item) => {
                return acc + (item.amount * item.price)
            },0)
        },
        emptyTheBasket : (state) =>{
            state.basket = [];
        },
    }
})

export const {addWordToFilter, removeWordToFilter , addFiltered , addToBasket , removeFromBasket , increaseAmount , addToCheckBasket , decreaseAmount , totalPrice , emptyTheBasket} = productsSlice.actions;
export default productsSlice.reducer;
