import React from 'react'
import { useSelector } from 'react-redux'
import HazirKelimeler from './HazirKelimeler/HazirKelimeler'
import Header from './Header/Header'
import KelimeYaz from './KelimeYaz/KelimeYaz'
import Skor from './skor/skor'

function Container() {

  const saniye = useSelector((state) => state.word.saniye)

  return (
  <>
    {
      saniye > 0 ? 
    (
    <div>
      <Header />
      <HazirKelimeler />
      <KelimeYaz />
      <Skor />
    </div>
    )
    :
    (
      <div>
        <Skor />
      </div>
    )
    }
  </>

  )
}

export default Container
