import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
    <div className='w-full h-screen duration-200 ' style={{backgroundColor : color}}>

     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
      
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-pink-400 px-3 py-2 rounded-3xl'>
        <button className='text-white rounded-full p-2 ' style={{background:"red"}} onClick={()=>{setColor("red")}}>
          
          red</button>
        <button className='text-white rounded-full p-2 ' style={{background:"blue"}} onClick={()=>{setColor("blue")}}>
          
          blue</button>
        <button className='text-white rounded-full p-2 ' style={{background:"pink"}} onClick={()=>{setColor("pink")}}>
          
          pink</button>
        <button className='text-white rounded-full p-2 ' style={{background:"olive"}} onClick={()=>{setColor("olive")}}>
          
          olive</button>
        <button className='text-white rounded-full p-2' style={{background:"green"}} onClick={()=>{setColor("green")}}>
          
          green</button>
      </div>
     </div>
    </div>
      </>
  )
}

export default App
