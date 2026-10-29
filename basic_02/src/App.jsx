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
  const list = [
{
title: 'React',
url: 'https://react.dev/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://redux.js.org/',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];
  return (
    <>
    <h1>counter value is {counter}</h1>
      <button 
      onClick={addcounter}
      >add counter value</button>
      <button 
      onClick={minuscounter}
      >minus counter value</button>
      <ul> 
        {list.map((item)=>{
         return <li>{item.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
