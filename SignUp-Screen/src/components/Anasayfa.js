import React from 'react'
import { useName } from '../context/nameContext'
import "./style.css"

function Anasayfa() {

  const {name} = useName()

  return (
    <div className='anasayfa'>
      Hoş geldin {name.toUpperCase()} !
    </div>
  )
}

export default Anasayfa
