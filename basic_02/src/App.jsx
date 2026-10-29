import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  let counter = 0
  const addcounter = ()=>{
      console.log("counter values is " , counter);
      counter = counter +1
  }
  const minuscounter = ()=>{
      console.log("counter values is " , counter);
      counter = counter - 1
  }
  return (
    <>
      <h1>counter value is {counter}</h1>
      <button 
      onClick={addcounter}
      >add counter value</button>
      <button 
      onClick={minuscounter}
      >minus counter value</button>
    </>
  )
}

export default App
