import React, { useEffect, useState } from 'react'
import { useKoltukNumaralari } from '../../context/KoltukNumaralariContext'
import { useOnay } from '../../context/OnayContext'
import { useSil } from '../../context/SilContext'

function Koltuklar() {

    const {koltukNo , setKoltukNo} = useKoltukNumaralari()
    const {onayla} = useOnay()
    const {sil} = useSil()
    const [ doluKoltuklar , setDoluKoltuklar] = useState([])

    useEffect(() =>{
        setKoltukNo([])
        setDoluKoltuklar([])
    },[sil])

    const koltukTikla = (e) =>{
        koltukNo.includes(e.target.id) ?
        setKoltukNo(koltukNo.filter((item) => item !== e.target.id)) :
        setKoltukNo([...koltukNo , e.target.id])
    }

    useEffect(() =>{
        setDoluKoltuklar(JSON.parse(localStorage.getItem("dolu")) + koltukNo)
    },[onayla])

    useEffect(() =>{
        localStorage.setItem("dolu" , JSON.stringify(doluKoltuklar))    
    },[doluKoltuklar])


    return (
        <div>
        <div className='koltuklarinArasiniAc'>
            <div className='sayilariYanYanaYaz'>
                <div>1</div>
                <div style={{margin: "0 78px 0 25px"}}>2</div>
                <div>3</div>
                <div style={{margin: "0 48px 0 25px"}}>4</div>
                <div>5</div>
                <div style={{margin: "0 75px 0 25px"}}>6</div>
                <div>7</div>
                <div style={{margin: "0 0 0 28px"}}>8</div>
            </div>
        </div>
        <div className='yaninaAl'>
            <div className='koltuklarinArasiniAc'> 
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>A</div>
                    <button id='s2a1' className={`${koltukNo.includes('s2a1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a1')} onClick={koltukTikla}>1</button>
                    <button id='s2a2' className={`${koltukNo.includes('s2a2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a2')} onClick={koltukTikla}>1</button>
                </div>
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>B</div>
                    <button id='s2b1' className={`${koltukNo.includes('s2b1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b1')} onClick={koltukTikla}>1</button>
                    <button id='s2b2' className={`${koltukNo.includes('s2b2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b2')} onClick={koltukTikla}>1</button>
                </div>
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>C</div>
                    <button id='s2c1' className={`${koltukNo.includes('s2c1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c1')} onClick={koltukTikla}>1</button>
                    <button id='s2c2' className={`${koltukNo.includes('s2c2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c2')} onClick={koltukTikla}>1</button>
                </div>
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>D</div>
                    <button id='s2d1' className={`${koltukNo.includes('s2d1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d1')} onClick={koltukTikla}>1</button>
                    <button id='s2d2' className={`${koltukNo.includes('s2d2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d2')} onClick={koltukTikla}>1</button>
                </div>            
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>E</div>
                    <button id='s2e1' className={`${koltukNo.includes('s2e1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e1')} onClick={koltukTikla}>1</button>
                    <button id='s2e2' className={`${koltukNo.includes('s2e2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e2')} onClick={koltukTikla}>1</button>
                </div>
            </div>


            <div className='koltuklarinArasiniAc'>
                <div className='yaninaAl'>
                    <button id='s2a3' className={`${koltukNo.includes('s2a3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a3')} onClick={koltukTikla}>2</button>
                    <button id='s2a4' className={`${koltukNo.includes('s2a4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a4')} onClick={koltukTikla}>2</button>
                    <button id='s2a5' className={`${koltukNo.includes('s2a5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a5')} onClick={koltukTikla}>2</button>
                    <button id='s2a6' className={`${koltukNo.includes('s2a6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2b3' className={`${koltukNo.includes('s2b3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b3')} onClick={koltukTikla}>2</button>
                    <button id='s2b4' className={`${koltukNo.includes('s2b4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b4')} onClick={koltukTikla}>2</button>
                    <button id='s2b5' className={`${koltukNo.includes('s2b5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b5')} onClick={koltukTikla}>2</button>
                    <button id='s2b6' className={`${koltukNo.includes('s2b6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2c3' className={`${koltukNo.includes('s2c3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c3')} onClick={koltukTikla}>2</button>
                    <button id='s2c4' className={`${koltukNo.includes('s2c4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c4')} onClick={koltukTikla}>2</button>
                    <button id='s2c5' className={`${koltukNo.includes('s2c5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c5')} onClick={koltukTikla}>2</button>
                    <button id='s2c6' className={`${koltukNo.includes('s2c6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2d3' className={`${koltukNo.includes('s2d3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d3')} onClick={koltukTikla}>2</button>
                    <button id='s2d4' className={`${koltukNo.includes('s2d4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d4')} onClick={koltukTikla}>2</button>
                    <button id='s2d5' className={`${koltukNo.includes('s2d5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d5')} onClick={koltukTikla}>2</button>
                    <button id='s2d6' className={`${koltukNo.includes('s2d6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2e3' className={`${koltukNo.includes('s2e3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e3')} onClick={koltukTikla}>2</button>
                    <button id='s2e4' className={`${koltukNo.includes('s2e4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e4')} onClick={koltukTikla}>2</button>
                    <button id='s2e5' className={`${koltukNo.includes('s2e5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e5')} onClick={koltukTikla}>2</button>
                    <button id='s2e6' className={`${koltukNo.includes('s2e6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e6')} onClick={koltukTikla}>2</button>
                </div>
            </div>


            <div>
                <div className='yaninaAl'>
                    <button id='s2a7' className={`${koltukNo.includes('s2a7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a7')} onClick={koltukTikla}>3</button>
                    <button id='s2a8' className={`${koltukNo.includes('s2a8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2a8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2b7' className={`${koltukNo.includes('s2b7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b7')} onClick={koltukTikla}>3</button>
                    <button id='s2b8' className={`${koltukNo.includes('s2b8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2b8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2c7' className={`${koltukNo.includes('s2c7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c7')} onClick={koltukTikla}>3</button>
                    <button id='s2c8' className={`${koltukNo.includes('s2c8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2c8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2d7' className={`${koltukNo.includes('s2d7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d7')} onClick={koltukTikla}>3</button>
                    <button id='s2d8' className={`${koltukNo.includes('s2d8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2d8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s2e7' className={`${koltukNo.includes('s2e7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e7')} onClick={koltukTikla}>3</button>
                    <button id='s2e8' className={`${koltukNo.includes('s2e8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s2e8')} onClick={koltukTikla}>3</button>
                </div>
            </div>
        </div>

        </div>
    )
    }

    export default Koltuklar
