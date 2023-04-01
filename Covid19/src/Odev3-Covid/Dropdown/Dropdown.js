import React, { useEffect } from 'react'
import "./style.css"

import { ulkeIsimleriApi , seciliUlkeDegistir } from '../../redux3-Covid/CovidSlice'
import { useSelector , useDispatch } from 'react-redux'

function Dropdown() {

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(ulkeIsimleriApi())
  },[])

  const ulkeIsimleri = useSelector((state) => state.covid.ulkeIsimleri)

  return (
    <div className='country1'>
      <select onChange={(e) => dispatch(seciliUlkeDegistir(e.target.value))}> 
        <option value="global">Global</option> 
        {
            ulkeIsimleri.map((data) => (
                <option value={data.Country} key={data.Slug}>{data.Country}</option>
            ))
        }
      </select>
    </div>
  )
}

export default Dropdown