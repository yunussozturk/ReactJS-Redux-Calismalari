import React , {useEffect, useState} from 'react'
import style from "./style.module.css"
import { Textarea } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'

import { addNote } from '../../redux3/notes/notesSlice'
import { useDispatch , useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

function Form() {
  const [title , setTitle] = useState("")
  const [color , setColor] = useState("")

  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.items) 

  const addNoteClick = () =>{
    if(color !== "" && title !== ""){
      console.log(title)
      dispatch(addNote({id : nanoid() , title , completed : false , color }))
      setColor("")
      setTitle("")
    }else{
      title === "" ? alert("note giriniz") :
      color === "" && alert("renk seçiniz")
    }
  }

  useEffect(() =>{
    localStorage.setItem("notes" , JSON.stringify(notes))
  },[notes])


  console.log(color)
  return (
   <div className={color === "" && style.form || color === "pembe" && style.pembe || color === "mor" && style.mor ||
    color === "sari" && style.sari || color === "mavi" && style.mavi || color === "yesil" && style.yesil} >
      <div className={style.textarea}>
        <Textarea value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your note here...' />
      </div>
      <div className={style.formfooter}>
        <div className={style.renkliButonlar}>
        <div>
          <button onClick={() => setColor('pembe')} className={style.buton1} />
          <button onClick={() => setColor('mor')} className={style.buton2} />
          <button onClick={() => setColor('sari')} className={style.buton3} />
          <button onClick={() => setColor('mavi')} className={style.buton4} />
          <button onClick={() => setColor('yesil')} className={style.buton5} />
          
        </div>
        <div className={style.addButon}>
          <Button onClick={addNoteClick} colorScheme='whatsapp'>ADD</Button>
        </div>
      </div>
      </div>  
    </div>
  )
}

export default Form
