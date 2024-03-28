import { useState } from "react"; //Деструктуризація


export function Hero() {
  return(
    <h1>Hero</h1>
  )
}

export function About() {
  return(
    <h1>About</h1>
  )
}

export function Lorem() {
  return(
    <p>Lorem ipsum dolor sit amet.</p>
  )
}

export default function App() {

  let [out, setOut] = useState(0)


  let [section, setSection] = useState(Hero)
  
  let [tab, setTab] = useState()

  function render() {
    setOut(++out)
  }


  return (
    <>
      <h1>Test</h1>
      
      <button onClick={render}>+</button>
      <h3>{out}</h3>

    <nav>
      <ol>
        <li onClick={()=>{setSection(Hero)}}>Home</li>
        <li onClick={()=>{setSection(About)}}>About</li>
        <li onClick={()=>{setTab(Lorem)}}>Tab</li>
        {tab}
      </ol>
    </nav>

      {section}
    </>
  );
}


