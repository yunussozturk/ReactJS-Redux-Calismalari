import React from 'react'
import Salon1 from "./salon1";
import Salon2 from "./salon2";
import { useFilm } from '../../context/FilmlerContext'; 

function Salonlar() {

    const {film} = useFilm()

    return (
        <>
        {
            film === "movie1" ? (
                <div>
                    <Salon1 />
                </div>
            ) :
            (
                <div>
                    <Salon2 />
                </div>
            )
        }
        </>

    )
}

export default Salonlar