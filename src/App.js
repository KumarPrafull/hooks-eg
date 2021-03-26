import React, { useState } from 'react';

function App() {
const [count, setCount] = useState(()=> {
  console.log('state change')
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
    <button class='btn' onClick={minusCount}>  -  </button>
    <span> {count} </span>
    <button class='btn' onClick={plusCount}>  +  </button>    
    </>
  );
}

export default App;
