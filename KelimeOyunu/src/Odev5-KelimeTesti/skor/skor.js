import React from 'react'
import "./style.css"

import { useDispatch, useSelector } from 'react-redux'
import { saniyeRestart } from "../../redux5-KelimeTesti/wordSlice";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function Skor() {

  const dispatch = useDispatch()

  const yazdigimizKelimeler = useSelector((state) => state.word.yazdigimizKelimeler)
  const dogruKelimeler = useSelector((state) => state.word.dogruKelimeler)

  const saniye = useSelector((state) => state.word.saniye)

  // kapata basınca yeniden başlatsın
  const close = () =>{
    dispatch(saniyeRestart())
  }
  
  return (
    <div className='skor1'>
      <div className='skor2'>Sonuç<span>{saniye === 0 && (<FontAwesomeIcon onClick={close} icon={faXmark} />) }</span></div>
      <div className='skor3'>Toplam Kelime  <span>{yazdigimizKelimeler.length}</span></div>
      <div className='skor4'>Doğru Kelime  <span>{dogruKelimeler.length}</span></div>
      <div className='skor5'>Yanlış Kelime  <span>{yazdigimizKelimeler.length - dogruKelimeler.length}</span></div>
    </div>
  )
}

export default Skor
