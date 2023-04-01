import React, { useEffect, useState } from 'react'
import "./style.css"

import { useSelector , useDispatch } from 'react-redux'
import { yazdigimizKelimeyiEkle , saniyeAzalt , saniyeRestart, karistir } from "../../redux5-KelimeTesti/wordSlice";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons"

function KelimeYaz() {

  const dispatch = useDispatch()

  const hazirKelimeler = useSelector((state) => state.word.hazirKelimeler)
  const hazirKelimelerArray = hazirKelimeler.split(" ")           //hazir kelimeleri array yap
  
  const [ kelimeYaz , setKelimeYaz ] = useState("")  // inputa girilen değeri kullanmak için oluşturuldu

  const [saniyeyiCalistir , setSaniyeyiCalistir] = useState(false)   // inputa harf girince true yap ki sayaç çalışsın
  const saniye = useSelector((state) => state.word.saniye);
  const dakika = useSelector((state) => state.word.dakika);

  //yazdığımız kelimeyi yazdigimizKelimeler ' e ekle ve sayacı çalıştırmak için saniyeCalistir ' ı true yap
  useEffect((e) =>{
    if(kelimeYaz.includes(" ")){
      dispatch(yazdigimizKelimeyiEkle(kelimeYaz.trim()))
      setKelimeYaz("")
    }

    if(kelimeYaz !== ""){
      setSaniyeyiCalistir(true)
    }
  },[kelimeYaz])

  //saniye 0 olana kadar saniyeyi çalıştır.
  useEffect(() =>{
    if(saniyeyiCalistir == true){
      if(saniye !== 0){
        setTimeout(() =>{
          dispatch(saniyeAzalt())
        },1000)
      }
    }
  },[saniye , saniyeyiCalistir])


  const restart = () =>{
    setSaniyeyiCalistir(false)
    setKelimeYaz("")   
    setTimeout(() =>{
      dispatch(saniyeRestart())
      dispatch(karistir(hazirKelimelerArray))
    },1000)
  }


  
  return (
    <>
        <div className='kelimeyaz1'> 

            <div className='kelimeyaz2'>
                <input value={kelimeYaz} onChange={(e) => setKelimeYaz(e.target.value)} />
            </div>
            
            <div className='kelimeyaz3'>
                {dakika}:{(saniye % 60) > 9 ? (saniye % 60) : `0${saniye % 60}`} 
            </div>

            <div className='kelimeyaz4'>
                <button onClick={restart}><FontAwesomeIcon icon={faArrowsRotate} /></button>
            </div>

        </div>
    </>
  )
}

export default KelimeYaz
