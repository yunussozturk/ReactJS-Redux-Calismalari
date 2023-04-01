import React from 'react';
import "./style.css"; 
import { useDispatch } from 'react-redux';
import { addWordToFilter , removeWordToFilter , addFiltered  } from '../../redux5/productsSlice';

function Filter() {

  const dispatch = useDispatch();

  const handleChange = (e) =>{
    if(e.target.checked === true){
      dispatch(addWordToFilter(e.target.value))
    }
    else if(e.target.checked === false){
      dispatch(removeWordToFilter(e.target.value))
    }
  }

  const filtreUygula = () =>{
      dispatch(addFiltered())
  }

  return (
    <div className='filtreler'>
      <span className='filtre'>
        Filtreler :
      </span>

      <span className='cinsiyet'>
        <input 
        type="checkbox" 
        name='kategori' 
        value="woman" 
        onChange={handleChange}
        />
        {" "}Kadın

        <input 
        className='erkek' 
        type="checkbox" 
        name='kategori' 
        value="man" 
        onChange={handleChange}
        />
        {" "}Erkek
      </span>

      <span className='kategori'>
        <input 
        className='sweatshirt' 
        type="checkbox" 
        name='kategori' 
        value="sweatshirt" 
        onChange={handleChange}
        />
        {" "}Sweatshirt

        <input 
        className='jean' 
        type="checkbox" 
        name='kategori' 
        value="jean" 
        onChange={handleChange}
        />
        {" "}Jean
      </span>

      <span>
        <button onClick={filtreUygula} className='uygula'>Filtreyi uygula</button>
      </span>
    </div>
  )
}

export default Filter
