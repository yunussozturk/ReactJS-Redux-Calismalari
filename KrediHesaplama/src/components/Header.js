import React from "react";
import { useKrediTuru } from '../context/KrediTuruContext'

function Header() {

  const {setKrediTuru} = useKrediTuru();

  const krediChange = (e) =>{
    setKrediTuru(e.target.value)
  }

  return (
    <div>
        <div className='header1'>
            Kredi Hesaplama
            <span className='header2'>
                <select className='header3' onChange={krediChange}>
                    <option value="ihtiyacKredisi" >ihtiyaç kredisi</option>
                    <option value="tasitKredisi">taşıt kredisi</option>
                    <option value="konutKredisi">konut kredisi</option>
                </select>
            </span>
        </div>
    </div>
  )
}

export default Header
