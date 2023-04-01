import React, { useEffect, useState } from 'react'

import "./style.css"
import { useSelector , useDispatch} from 'react-redux';
import {startAgain , openAddTwoCharacter  , changeRecord , restart } from "../../redux7/gameSlice"

import {Modal,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'

import { Link } from 'react-router-dom';

function Game() {

  const [ ikiEleman , setIkiEleman] = useState([])
  const [ koyuRenk , setKoyuRenk ] = useState([])
  
  const newRecord = useSelector((state) => state.game.newRecord)
  const userName = useSelector((state) => state.game.userName)
  const gameCharacters = useSelector((state) => state.game.gameCharacters)
  const twoCharacter = useSelector((state) => state.game.twoCharacter)
  const recordHolder = useSelector((state) => state.game.recordHolder)
  const [ puan , setPuan] = useState({name : userName , point : 100})

  const ccc = twoCharacter.map((data) => data.id)

  const dispatch = useDispatch();

  const resetBtnClick = () =>{
    setIkiEleman([])
    dispatch(startAgain())
    setTimeout(function(){
      dispatch(restart())
    },1500)
    setPuan({name : userName , point : 100})
  }

  const handleClick = (data) =>{
    setIkiEleman([...ikiEleman , data])
  }

  const ddd = ikiEleman.map((data) => data.id)

  useEffect(() =>{
      if(ikiEleman.length === 2 && ikiEleman[0].title === ikiEleman[1].title){
        
        dispatch(openAddTwoCharacter(ikiEleman))
        setPuan({ name : userName , point : puan.point + 50})
        setIkiEleman([])
        

      }
      else if(ikiEleman.length === 2 && ikiEleman[0].title !== ikiEleman[1].title){
        setPuan({ name : userName , point : puan.point - 10})
        setTimeout(() => setIkiEleman([]) , 1000)
      }    

      if(twoCharacter.length === 20){
        onOpen()
        dispatch(changeRecord(puan))
        console.log("kazandınız")
      }
  },[ikiEleman])

  useEffect(()=>{
    setTimeout(function(){
      setKoyuRenk(twoCharacter.map((data) => data.id))
    },1500)
  },[twoCharacter])

  useEffect(() =>{
    localStorage.setItem("userName" , JSON.stringify(userName))
  },[userName])

  useEffect(() =>{
    if(puan.point === 0){
      onOpen()
      setPuan({name : userName , point : 100})
      console.log("kaybettiniz")
    }
  },[puan.point])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const close = () =>{
    dispatch(startAgain())
    dispatch(restart())
    setPuan({name : userName , point : 100})
    onClose()
  }

  return (
    <div className='game'>
        <div>
            <div className='player'>Player</div>
            <div className='userName'>{userName}</div>
            <div className='resetBtn'><button onClick={resetBtnClick}>Restart</button></div>
            <div className='geri'><button><Link to={"/"}>Back</Link></button></div>
        </div>      
       <div className='boxes'>
        {
          gameCharacters.map((data) => (
            <button key={data.id} disabled={ddd.includes(data.id) || ccc.includes(data.id) || ddd.length > 1} className='box' onClick={() => handleClick(data)}>
              <div className={`ortak ${ddd.includes(data.id) === true || ccc.includes(data.id) === true  ? "arka2" : "arka1"}`}>
                <img className={`${koyuRenk.includes(data.id) === true && "blackout"}`} src={data.address}  />
              </div>
              <div className={`ortak ${ddd.includes(data.id) === true || ccc.includes(data.id) === true  ? "on2" : "on1"}`}>
                <div className='soruIsareti'>?</div>
              </div>
            </button>
          ))
        }
       </div>             
        <div>
            <div className='score'>
              <div>SCORE</div>
              <div id='score' >{puan.point}</div>
            </div>        
            <div className='record'>
              <div className='recordTitle'>RECORD</div>
              <div className='recordHolder'>{recordHolder}<br /><span className='recordScore'>{newRecord}</span></div>
            </div>
          
           

              <Modal border='2px solid black' borderRadius='20px'  isOpen={isOpen} onClose={close}>
              
                <ModalContent marginTop='150px'>
                  <ModalHeader bg='orange' fontSize='30px' color='green' padding='20px' >
                    {twoCharacter.length === 20 ? "Congratulations !" : "You Lost !" }
                  </ModalHeader>
                  <ModalCloseButton fontSize='20px' border='1px solid red' bg='red' color='white' >X</ModalCloseButton>
                  <ModalBody fontSize='50px' bg='white' padding='20px'>    
                  Puanınız : {puan.point}
                  </ModalBody>
                  <ModalFooter bg='white'>
                    <Button colorScheme='blue' mr={3} onClick={close}>
                      Close
                    </Button>
                    <Button colorScheme='green' onClick={close}>
                      Restart
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal> 
        </div>
    </div>
  )
}
export default Game

