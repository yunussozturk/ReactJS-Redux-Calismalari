import React, { useEffect , useRef } from 'react'
import "./style.css"

import { useSelector , useDispatch } from 'react-redux'
import { dogruKelimeEkle , karistir } from "../../redux5-KelimeTesti/wordSlice";


function HazirKelimeler() {

  const end = useRef();
  
  const dispatch = useDispatch()

  const hazirKelimeler = useSelector((state) => state.word.hazirKelimeler)
  const hazirKelimelerArray = hazirKelimeler.split(" ")           //hazir kelimeleri array yap
  const hazirKelimelerShuffle = useSelector((state) => state.word.hazirKelimelerShuffle)
  const yazdigimizKelimeler = useSelector((state) => state.word.yazdigimizKelimeler)

  //hazır kelimeleri karıştır ve hazirKelimelerShuffle ' ye ekle
  useEffect(() =>{
    dispatch(karistir(hazirKelimelerArray))
  },[])
  
  //doğru kelimeleri bul ve dogruKelimeler ' e ekle
  useEffect(() =>{
      hazirKelimelerShuffle.slice(yazdigimizKelimeler.length - 1 , hazirKelimelerShuffle.length).map((data) => 
      hazirKelimelerShuffle[hazirKelimelerShuffle.indexOf(data)] === yazdigimizKelimeler[hazirKelimelerShuffle.indexOf(data)] && 
      dispatch(dogruKelimeEkle(hazirKelimelerShuffle[hazirKelimelerShuffle.indexOf(data)]))     
    )
    yazdigimizKelimeler.length > 0 && end.current.scrollIntoView();
  },[yazdigimizKelimeler])



  return (
    <div className='hazirkelimeler1'>
        <div className='hazirkelimeler2'>         
          {
            hazirKelimelerShuffle.slice(0 , yazdigimizKelimeler.length).map((data , key) =>(
              <div key={key} className={`hazirkelimeler3 ${hazirKelimelerShuffle[hazirKelimelerShuffle.indexOf(data)] === yazdigimizKelimeler[hazirKelimelerShuffle.indexOf(data)] ? "yesil" : "kirmizi"}`}>{data}</div>
            ))
          }

          {
            hazirKelimelerShuffle.slice(yazdigimizKelimeler.length , yazdigimizKelimeler.length + 1).map((data , key) =>(
              <div  key={key} className={`hazirkelimeler3 gri`}>{data}</div>
            ))
          }
          <div style={{marginTop : "-8px"}} ref={end}></div>
          {
            hazirKelimelerShuffle.slice(yazdigimizKelimeler.length + 1 , hazirKelimelerShuffle.length).map((data , key) =>(
            <div key={key}>
              <div className={`hazirkelimeler3`}>{data}</div>
            </div>
            ))
          }

        </div>
    </div>
  )
  }

export default HazirKelimeler