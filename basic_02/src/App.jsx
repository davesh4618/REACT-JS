import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
 const list = [
{
title: 'React ',
url: 'https://react.dev/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux ',
url: 'https://redux.js.org/',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];
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
      <ul> 
        {list.map((item)=>{
         return (<li key={item.objectID}>
                  <a href='https://www.youtube.com/watch?v=Er2gib_u4xM&t=7584s'>{item.title}</a>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
         </li>
               
         )
        })}
      </ul>
      <List/>
      <hr />
      <Search/>
    </>
  )
}

function List() {
return (
<ul>
{list.map(function (item) {
return (
<li key={item.objectID}>
<span>
<a href={item.url}>{item.title}</a>
</span>
<span>{item.author}</span>
<span>{item.num_comments}</span>
<span>{item.points}</span>
</li>
);
})}
</ul>
);
}
function Search() {
return (
<div>
<label htmlFor="search">Search: </label>
<input id="search" type="text" />
</div>
);
}
export default App
