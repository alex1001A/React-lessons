import useFetch from "react-fetch-hook";
import React, { useState } from "react";


import './App.css';

const users = [
  { id: 1, name: "Пользователь 1", age: 25 },
  { id: 2, name: "Пользователь 2", age: 30 },
  { id: 3, name: "Пользователь 3", age: 22 },
  { id: 4, name: "Пользователь 4", age: 27 },
  { id: 5, name: "Пользователь 5", age: 29 }
];


export default function App() {

  // const { data } = useFetch('https://rickandmortyapi.com/api/character')

  // console.log(data?.results); // "?" - аналог await, ждет чтобы вывести в консоль пока не подгрузится API

  // let a = 0

  // let [out, setOut] = useState(a)

  let [out, setOut] = useState(users)
  let [count, setCount] = useState(users.length)

  let inp1 = React.createRef()
  let inp2 = React.createRef()

  function plus() {

    let name = inp1.current.value
    let age = inp2.current.value

    setOut([...out, { id: ++out.length, name: name, age: age }])
    setCount(out.length)

    console.log(out);
  }

  return (
    <div className='container'>
      <h1>Tasks {count}</h1>
      <input ref={inp1} type="text" placeholder="Name" />
      <input ref={inp2} type="number" placeholder="Age" />
      <button onClick={plus}>Add</button>
      <div>
        <ol>
          
            {out.map(item => <li key={item.id}>Name: {item.name} Age: {item.age}</li>)}
          
        </ol>

      </div>
    </div>
  );
}

