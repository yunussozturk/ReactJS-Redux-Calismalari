import React, { useEffect, useState } from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { createUserName , startAgain } from '../../redux7/gameSlice';

function Home() {

  const [user , setUser] = useState("")

  const userName = useSelector((state) => state.game.userName)
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(user === ""){
      return alert("Lütfen kullanıcı adı giriniz")
    }

    if(user.length > 9 ){
      alert("maksimum 9 karakter giriniz")
      return false;
    }
    dispatch(startAgain())
    dispatch(createUserName(user))
    setUser("")
  }

  return (
    <div className='home'>
      Kullanıcı adı giriniz
      <input placeholder='max 9 karakter giriniz...' value={user} onChange={(e) => setUser(e.target.value)} />   
      <button onClick={handleSubmit}>
        {user === "" || user.length > 9 ? "Play a Game" : (<Link to={"/play"} className='buton' >Play a Game</Link>)}
      </button>
    </div>
  )
}

export default Home;
