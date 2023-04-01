import React from 'react'
import { useFilm } from '../../context/FilmlerContext';

function Movie() {

  const {film , setFilm} = useFilm()

  const movieDegis = (e) =>{
    setFilm(e.target.value)
  }

  return (
    <div className='movie'>
      <select className='movieNames' id="cars" name="cars" onChange={movieDegis}>
          <option value="movie1">Movie 1</option>
          <option value="movie2">Movie 2</option>
      </select>
    </div>
  )
}

export default Movie;