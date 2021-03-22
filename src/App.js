import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(()=> {
  console.log('run function')
  return 4
})

function minusCount() {
  setCount(prevCount => prevCount-1)
}

function plusCount() {
  setCount(prevCount => prevCount+1)
}

  return (
    <>
    <button onClick={minusCount}>  -  </button>
    <span> {count} </span>
    <button onClick={plusCount}>  +  </button>    
    </>
  );
}

export default App;
