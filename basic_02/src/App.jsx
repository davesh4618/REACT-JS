import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter ,setcounter]= useState(0)
  const addcounter = ()=>{
      console.log("counter values is " , counter);
      if (counter >=20) {
        console.log("value can not be more than 20");
        
      }else{
        setcounter(counter+1)
      }
  }

  const minuscounter = ()=>{
      console.log("counter values is " , counter);
      if (counter==0) {
        console.log("value can not be less than 0");
        
      }else{setcounter(counter-1)}
      
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
