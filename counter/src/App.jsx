import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  const decreaseValue = () => {
    setCounter((prevState) => prevState - 1);
  }
  const resetValue = () => {
    setCounter((prevState) => prevState * 0);
  }
  const increaseValue = () => {

    setCounter((prevState) => prevState + 1);

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
