import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  const decreaseValue = () => {
    setCounter(counter--);
  }
  const resetValue = () => {
    setCounter(counter = 0);
  }
  const increaseValue = () => {
    setCounter(counter++);
  }

  return (
    <>
      <p>
        <h1>The Counter</h1>
        <h3>Counter Value : {counter}</h3>
        <div className='btn'>
          <button onClick={decreaseValue}>Decrease</button>
          <button onClick={resetValue}>Reset</button>
          <button onClick={increaseValue}>Increase</button>
        </div>

      </p>

    </>
  )
}

export default App
