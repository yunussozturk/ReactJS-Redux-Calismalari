import React from 'react'
import style from "./style.module.css"

function DoluBosSecili() {
  return (
    <div className={style.arka}>
        <div>
            <button className={style.secili}>3</button>
            <span className={style.dolubossecili}>Seçili</span>
        </div>
        <div>
            <button className={style.bos}>3</button>
            <span className={style.dolubossecili}>Boş</span>
        </div>
        <div>
            <button className={style.dolu}>3</button>
            <span className={style.dolubossecili}>Dolu</span>
        </div>
    </div>
  )
}

export default DoluBosSecili
