import React from 'react'
import style from "./style.module.css"

import { useDispatch , useSelector } from 'react-redux'
import { changeColor, destroy } from '../../redux3/notes/notesSlice'

function PembeNotlar() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.items)
  console.log(notes)
  const filterNotes = notes.filter((data) => data.color === "pembe")
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
            Note 1
        </div>
        <div className={style.note1}>
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

export default PembeNotlar