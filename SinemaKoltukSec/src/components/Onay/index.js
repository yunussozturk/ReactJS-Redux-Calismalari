import React from 'react'
import { useOnay } from '../../context/OnayContext'
import { useSil } from '../../context/SilContext'

function Onay() {

  const {onayla , setOnayla} = useOnay()
  const {sil , setSil} = useSil()

  const onayButonuTikla = () =>{
    setOnayla(onayla === false ? true : false)
  }

  const silButonunaTikla = () =>{
    setSil(sil === false ? true : false)
  }
  
  return (
    <div className='onay'>
      <button onClick={onayButonuTikla} className='onayButon'>
        ONAYLA
      </button>
      <button onClick={silButonunaTikla} className='sifirla'> 
        SİL
      </button>
    </div>
  )
}

export default Onay
