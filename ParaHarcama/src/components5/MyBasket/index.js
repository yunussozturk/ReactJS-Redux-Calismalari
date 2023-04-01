import React , {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {totalPrice , emptyTheBasket} from "../../redux5/productsSlice";
import "./style.css";

function MyBasket() {

  const basket = useSelector((state) => state.product.basket);
  const dispatch = useDispatch()
  const total = useSelector((state) => state.product.total)

  useEffect(() => {
        dispatch(totalPrice())
  },[basket])

  const resetBasket = () =>{
    if(window.confirm('Are you sure?')){
        dispatch(emptyTheBasket())
    }
  }

  return (
    <div>       
        <div className='myBasket1'>
            <div className='myBasket2'>
                Sepettekiler :
            </div> 
            {basket.length !== 0 ? ( 
            <div>
                {basket.map((item) => (
                    <div key={item.id}>
                        <div className='myBasket3'>
                            {`${item.amount} adet ${item.model}`}
                        </div>
                        <div className='myBasket4'>
                            {`${item.price*item.amount} TL`}
                        </div>
                    </div>               
                ))}
            </div> 
            ):
            (
                <div className='myBasket4'>
                    Sepetiniz boş...
                </div>
            )
          }  
        </div>  

        <div className='myBasket5'>
            <span className='myBasket6'>Toplam Tutar :</span>{total} TL
        </div>

        <div className='myBasket7'>
            <button className='myBasket8' onClick={resetBasket}>Sepeti Sıfırla</button>
        </div>
    </div>
  )
}

export default MyBasket
