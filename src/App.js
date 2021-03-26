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
    <div class='container' >
    <button class='btn' onClick={minusCount}>  Delete  </button>
    <span class='label' > {count} </span>
    <button class='btn' onClick={plusCount}>  Add  </button>    
    </div>
  );
}

export default App;
