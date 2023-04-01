import React, { useEffect } from 'react'
import "./style.css";
import { useSelector , useDispatch } from 'react-redux';
import { addToBasket , increaseAmount , decreaseAmount , removeFromBasket } from "../../redux5/productsSlice";

function Product({data}) {

    const basket = useSelector((state) => state.product.basket)
    const money = useSelector((state) => state.product.money)
    const total = useSelector((state) => state.product.total)
    const dispatch = useDispatch()

    const basketItem = basket.find((item) => item.id === data.id)

    const addBasket = () =>{
        const checkBasket = basket.find(item => item.id === data.id)
        if(checkBasket){
            const checkBasketCopy =  Object.assign({}, checkBasket);     
            checkBasketCopy.amount += 1;
            dispatch(increaseAmount(checkBasketCopy))      
        }else{
            dispatch(addToBasket({id : data.id , amount : 1 , model : data.model , price : data.price}))
        }     
    }

    const subtractBasket = () =>{
        const checkBasket = basket.find(item => item.id === data.id)
        const checkBasketCopy =  Object.assign({}, checkBasket);
        checkBasketCopy.amount -= 1;
        if(checkBasketCopy.amount === 0){
            console.log("amount sıfıra eşit")
            dispatch(removeFromBasket(checkBasketCopy))
        }
        else{   
            dispatch(decreaseAmount(checkBasketCopy))
        }
    }
    
    return (
        <div className='ortala'>
            <div className='product'>
                <div className='title'>
                    <h4>{data.model} ({data.title}-{data.gender})</h4>
                </div>
                <div>
                    <img className='resim' src={data.address} />
                </div>
                <div className='priceSellBuy'>
                    <div className='price'>{data.price} TL</div>
                    <hr />
                    <div className='sellBuy'>
                    <button onClick={subtractBasket} disabled={!basketItem} className={`${basketItem ? "sat1" : "sat2"}`}>
                        SAT
                    </button>
                    <span>
                        0
                    </span>
                    <button onClick={addBasket} disabled={total + data.price > money} className={`${total + data.price > money ? "al2" : "al1"}`}>
                        AL
                    </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product