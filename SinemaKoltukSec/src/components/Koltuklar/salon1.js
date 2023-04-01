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
                    <button id='s1a1' className={`${koltukNo.includes('s1a1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a1')} onClick={koltukTikla}>1</button>
                    <button id='s1a2' className={`${koltukNo.includes('s1a2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a2')} onClick={koltukTikla}>1</button>
                </div>
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>B</div>
                    <button id='s1b1' className={`${koltukNo.includes('s1b1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b1')} onClick={koltukTikla}>1</button>
                    <button id='s1b2' className={`${koltukNo.includes('s1b2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b2')} onClick={koltukTikla}>1</button>
                </div>
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>C</div>
                    <button id='s1c1' className={`${koltukNo.includes('s1c1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c1')} onClick={koltukTikla}>1</button>
                    <button id='s1c2' className={`${koltukNo.includes('s1c2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c2')} onClick={koltukTikla}>1</button>
                </div>
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>D</div>
                    <button id='s1d1' className={`${koltukNo.includes('s1d1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d1')} onClick={koltukTikla}>1</button>
                    <button id='s1d2' className={`${koltukNo.includes('s1d2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d2')} onClick={koltukTikla}>1</button>
                </div>            
                <div className='yaninaAl'>
                    <div style={{marginRight : "10px"}}>E</div>
                    <button id='s1e1' className={`${koltukNo.includes('s1e1') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e1')} onClick={koltukTikla}>1</button>
                    <button id='s1e2' className={`${koltukNo.includes('s1e2') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e2')} onClick={koltukTikla}>1</button>
                </div>
            </div>


            <div className='koltuklarinArasiniAc'>
                <div className='yaninaAl'>
                    <button id='s1a3' className={`${koltukNo.includes('s1a3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a3')} onClick={koltukTikla}>2</button>
                    <button id='s1a4' className={`${koltukNo.includes('s1a4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a4')} onClick={koltukTikla}>2</button>
                    <button id='s1a5' className={`${koltukNo.includes('s1a5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a5')} onClick={koltukTikla}>2</button>
                    <button id='s1a6' className={`${koltukNo.includes('s1a6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1b3' className={`${koltukNo.includes('s1b3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b3')} onClick={koltukTikla}>2</button>
                    <button id='s1b4' className={`${koltukNo.includes('s1b4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b4')} onClick={koltukTikla}>2</button>
                    <button id='s1b5' className={`${koltukNo.includes('s1b5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b5')} onClick={koltukTikla}>2</button>
                    <button id='s1b6' className={`${koltukNo.includes('s1b6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1c3' className={`${koltukNo.includes('s1c3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c3')} onClick={koltukTikla}>2</button>
                    <button id='s1c4' className={`${koltukNo.includes('s1c4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c4')} onClick={koltukTikla}>2</button>
                    <button id='s1c5' className={`${koltukNo.includes('s1c5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c5')} onClick={koltukTikla}>2</button>
                    <button id='s1c6' className={`${koltukNo.includes('s1c6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1d3' className={`${koltukNo.includes('s1d3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d3')} onClick={koltukTikla}>2</button>
                    <button id='s1d4' className={`${koltukNo.includes('s1d4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d4')} onClick={koltukTikla}>2</button>
                    <button id='s1d5' className={`${koltukNo.includes('s1d5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d5')} onClick={koltukTikla}>2</button>
                    <button id='s1d6' className={`${koltukNo.includes('s1d6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d6')} onClick={koltukTikla}>2</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1e3' className={`${koltukNo.includes('s1e3') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e3')} onClick={koltukTikla}>2</button>
                    <button id='s1e4' className={`${koltukNo.includes('s1e4') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e4')} onClick={koltukTikla}>2</button>
                    <button id='s1e5' className={`${koltukNo.includes('s1e5') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e5')} onClick={koltukTikla}>2</button>
                    <button id='s1e6' className={`${koltukNo.includes('s1e6') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e6')} onClick={koltukTikla}>2</button>
                </div>
            </div>


            <div>
                <div className='yaninaAl'>
                    <button id='s1a7' className={`${koltukNo.includes('s1a7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a7')} onClick={koltukTikla}>3</button>
                    <button id='s1a8' className={`${koltukNo.includes('s1a8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1a8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1b7' className={`${koltukNo.includes('s1b7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b7')} onClick={koltukTikla}>3</button>
                    <button id='s1b8' className={`${koltukNo.includes('s1b8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1b8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1c7' className={`${koltukNo.includes('s1c7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c7')} onClick={koltukTikla}>3</button>
                    <button id='s1c8' className={`${koltukNo.includes('s1c8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1c8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1d7' className={`${koltukNo.includes('s1d7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d7')} onClick={koltukTikla}>3</button>
                    <button id='s1d8' className={`${koltukNo.includes('s1d8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1d8')} onClick={koltukTikla}>3</button>
                </div>
                <div className='yaninaAl'>
                    <button id='s1e7' className={`${koltukNo.includes('s1e7') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e7')} onClick={koltukTikla}>3</button>
                    <button id='s1e8' className={`${koltukNo.includes('s1e8') ? "sariKoltuk" : "koltuk"}`} disabled={doluKoltuklar.includes('s1e8')} onClick={koltukTikla}>3</button>
                </div>
            </div>
        </div>

        </div>
    )
    }

    export default Koltuklar
