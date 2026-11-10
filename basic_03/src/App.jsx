import { useState } from "react";
import Card from "./Card.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const anyobject ={
    name : "John",
    button : "Click me"
  }

  return (
    <>
      <Card  name = {anyobject.name} button = {anyobject.button}/>
      <Card name = {anyobject.name} button = {anyobject.button}/>
      <Card name = {anyobject.name} button = {anyobject.button} />
      <Card name = {anyobject.name} button = {anyobject.button} />
      <Card name = "devesh" button = "please click"/>
    </>
  );
}

export default App;
