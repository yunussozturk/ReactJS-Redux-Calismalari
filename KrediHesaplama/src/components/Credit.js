import {useState , useEffect} from 'react'
import { useMonth } from '../context/MonthContext'
import { useTutar } from '../context/TutarContext';
import { useKrediTuru } from '../context/KrediTuruContext';

function Credit({aylikTutar ,setAylikTutar , detayGoster , setDetayGoster}) {

  const {month , setMonth} = useMonth();
  const {tutar , setTutar} = useTutar();
  const {krediTuru} = useKrediTuru();

  const [tutarKayit , setTutarKayit] = useState("")
  const [ sigortaRadio , setSigortaRadio] = useState("sigortasiz")

  const ayAzalt = () =>{
    if(month > 1){
      setMonth(month - 1)
    }
  }

  const ayArttir = () =>{
    if(month < 24){
      setMonth(month + 1)
    }
  }

  let faizOrani; 

  if(krediTuru === "ihtiyacKredisi"){
    if(sigortaRadio === "sigortasiz"){
      faizOrani = (month>12) ? 0.0216 : 0.0206
    }
    else if(sigortaRadio === "sigortali"){
      faizOrani = (month>12) ? 0.0216 : 0.0206
    } 
  }
  else if(krediTuru === "tasitKredisi"){
    if(sigortaRadio === "sigortasiz"){
      faizOrani = (month>12) ? 0.0218 : 0.0193
    }
    else if(sigortaRadio === "sigortali"){
      faizOrani = (month>12) ? 0.0203 : 0.0193
    } 
  }
  else if(krediTuru === "konutKredisi"){
    if(sigortaRadio === "sigortasiz"){
      faizOrani = (month>12) ? 0.0205 : 0.0202
    }
    else if(sigortaRadio === "sigortali"){
      faizOrani = (month>12) ? 0.0205 : 0.0199
    } 
  }

  const tutarDegistir = (e) =>{
    setTutar(e.target.value)
  }

  const tutarSubmit = (e) =>{
    e.preventDefault()
    setTutarKayit(tutar)
  }

  const tutarSifirla = () =>{
    setTutar("")
  }

  const radioChange = (e) =>{
    setSigortaRadio(e.target.value)
  }

  useEffect(() =>{
    setAylikTutar(tutarKayit * Math.pow((1+faizOrani),month))
  },[tutarKayit])

  const hesaplamaDetayi = () =>{
    (detayGoster===false) ? setDetayGoster(true) : setDetayGoster(false)
  }

  console.log(detayGoster)


  return (
    <div>
      <div className='kredi'>
        <div className='kredi1'>
          <div className='tutar'>
            TUTAR
          </div> 
          <div className='tutarTl'>
            <form onSubmit={tutarSubmit}>
              <input className='tutarInput' value={tutar} placeholder="Talep Edilen Tutarı Girin.." onChange={tutarDegistir} onClick={tutarSifirla}/>
            </form>
            <div className='tl'>TL</div>
          </div>
          <div>
            <input type='radio' name='sigorta' value="sigortasiz" checked={sigortaRadio === "sigortasiz"} onChange={radioChange} />
            <span className='sigortasiz'>SİGORTASIZ</span>
            <input type='radio' name='sigorta' value="sigortali" checked={sigortaRadio === "sigortali"} onChange={radioChange} />
            <span>SİGORTALI</span>
          </div>
          <div className='vade'>
            <div className='vade1'>
              <div className='vadeYazi'>
                VADE
              </div>
              <div className='vadeAzalt'>
                <button onClick={ayAzalt}>-</button>
              </div>
            </div>
            <div className='vade2'>
              <hr className='cizgi' />
              <div className='daire' style={{marginLeft : month * 9.13}}>o</div>
            </div>
            <div className='vade3'>
              <div className='vadeArttir'>
                {month} AY
              </div>
              <div>
                <button onClick={ayArttir}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className='kredi2'>
          <div>Aylık Taksit Tutarı</div>
          <div className='aylikTutar'>{(aylikTutar / month).toFixed(2)}TL</div>
          <div>Faiz Oranı % {(faizOrani*100).toFixed(2)}</div> 
          <div className='detay'>
            <a href='#' onClick={hesaplamaDetayi} style={{color : 'black'}} >Hesaplama Detayı</a>
          </div>      
        </div>      
      </div>
    </div>
  )
}

export default Credit


