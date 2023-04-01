import React from "react"

function Doviz() {
  return ( 
    <div className='doviz1'>
      <div className='yatirimci'>
        Yatırımcı özeti  
      </div>

      <div className='dolar'>
        $<span className='alis'>Alış</span> <span className='satis'>Satış</span> <br />
        <div className='alisFiyat'>19,03₺<span className='satisFiyat'>19,73₺</span></div>         
      </div>

      <div className='euro'>
        €<span className='alis'>Alış</span> <span className='satis'>Satış</span> <br />
        <div className='alisFiyat'>20,40₺<span className='satisFiyat'>21,05₺</span></div> 
      </div>

      <div>
        £<span className='alis'>Alış</span> <span className='satis'>Satış</span> <br />
        <div className='alisFiyat'>22,94₺<span className='satisFiyat'>24,24₺</span></div>         
      </div>   
    </div>
  )
}

export default Doviz