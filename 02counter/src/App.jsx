import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter] =  useState(15)

  //let counter = 15;

  const addValue = () => {
    if(counter < 20){
    console.log("clicked",counter);
     counter = counter + 1;
    setcounter(counter);
    }
  }

  const removeValue = () => {
    if(counter > 0){
    counter = counter - 1;
    setcounter(counter);
    }
  }

  const one = '1';  

  return (
    <>
    <h1>Chai ur react</h1>
    <h2>Counter Value {counter}</h2>
    <button onClick={addValue}>Add Value {one} </button> 
    <br />
    <br />
    <button onClick={removeValue} >Remove value {one} </button>

    </>
  )
}

export default App
