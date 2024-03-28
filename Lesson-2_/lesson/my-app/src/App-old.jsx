import React from 'react';

export default function App() {

  let out = React.createRef()
  let inp = React.createRef()
  let check = React.createRef()
  let count = React.createRef()

  let num = 2

  let arr = []

  function testClick() {
    console.log(check.current.checked);
    console.log(inp);
    out.current.innerHTML = inp.current.value
    arr.push(inp.current.value)
    console.log(arr);
  }

  function plus() {
    count.current.innerHTML++
  }

  function minus() {
    count.current.innerHTML--
  }

  function checkInp() {
    out.current.innerHTML = inp.current.value
  }

  


  return (
    <>
      <h1>Test</h1>
      <button onClick={testClick}>Start</button>
      <div ref={out}></div>
      <input type="checkbox" ref={check} />
      <input type="text" onInput={checkInp} ref={inp} />

      <div>
        <button onClick={plus}>+</button>
        <div ref={count}>0</div>
        <button onClick={minus}>-</button>
      </div>
    </>
  );
}


