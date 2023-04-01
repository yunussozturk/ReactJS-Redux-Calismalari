import React from 'react'
import style from "./style.module.css"

import { useDispatch } from 'react-redux'
import { changeColor , destroy } from '../../redux3/notes/notesSlice'

import { useSelector } from 'react-redux'

function SariNotlar() {
  const dispatch = useDispatch()

  const notes = useSelector((state) => state.notes.items)
  console.log(notes)
  const filterNotes = notes.filter((data) => data.color === "sari") 
  console.log(filterNotes)

  const handleDestroy = (id) =>{
    dispatch(destroy(id))
  }

  return (
    <div className={style.notlar}>
        <div>
            <button onClick={() => dispatch(changeColor('geri'))} className={style.buton12}>Geri</button>
        </div>
        <div className={style.notBaslik}>
            Note 3
        </div>
        <div className={style.note3}>
            <ul>
                {
                filterNotes.map((note) => 
                (<li>
                    <div onClick={() => handleDestroy(note.id)} className={style.destroy}>
                        <button>x</button>
                    </div>
                    <div>
                        <div className={style.note}>
                            {note.title}
                        </div>
                    </div>
                </li>))
                }
            </ul>
        </div>
    </div>
  )
}

export default SariNotlar
