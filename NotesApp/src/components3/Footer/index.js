import React from 'react';
import style from "./style.module.css";

import { useDispatch } from 'react-redux';
import { changeColor} from "../../redux3/notes/notesSlice";

function Footer() {
  let dispatch = useDispatch()

  return (
    <div>
        <div className={style.noteButonlar}>
            <button onClick={() => dispatch(changeColor('pembe'))} className={style.buton7}>Note 1</button>
            <button onClick={() => dispatch(changeColor('mor'))} className={style.buton8}>Note 2</button>
            <button onClick={() => dispatch(changeColor('sari'))} className={style.buton9}>Note 3</button>
        </div>
        <div>
            <button onClick={() => dispatch(changeColor('mavi'))} className={style.buton10}>Note 4</button>
            <button onClick={() => dispatch(changeColor('yesil'))} className={style.buton11}>Note 5</button>
        </div>

    </div>
  )
}

export default Footer
