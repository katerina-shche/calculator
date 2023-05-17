import { evaluate } from 'mathjs';
//styles
import { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState(0)

  const handleClear = () => {
    setInput('')
    setOutput(0)
  }
  const handleInput = (e) => {
    //* why it doesnot work????????
    if ((/=/g).test(input)) {
      console.log('hey there' + input)
      setInput('')
      setOutput(0)
      console.log('it works' + input)
    }

    setInput(input+e.target.value)
    if (e.target.value.match(/\d/)) {
    setOutput((input+e.target.value).match(/\d+$/))
    } else {setOutput(e.target.value)}
  }

  const handleEquals = (e) => {
    setInput(input+e.target.value)
    setOutput(evaluate(input))
  }

  return (
    <div id="App">
      <div id='calculator'>
        <div id='display'> 
          <div id='input'>{input}</div>
          <div id='output'>{output}</div>
        </div>
        <div id='buttons'>
          <button id='clear' value='AC' onClick={handleClear}>AC</button>
          <button id='divide'value='/' onClick={handleInput}>/</button>
          <button id='multiply'value='*' onClick={handleInput}>x</button>
          <button id='seven'value='7' onClick={handleInput}>7</button>
          <button id='eight'value='8' onClick={handleInput}>8</button>
          <button id='nine'value='9' onClick={handleInput}>9</button>
          <button id='substruct'value='-' onClick={handleInput}>-</button>
          <button id='four'value='4' onClick={handleInput}>4</button>
          <button id='five'value='5' onClick={handleInput}>5</button>
          <button id='six'value='6' onClick={handleInput}>6</button>
          <button id='add'value='+' onClick={handleInput}>+</button>
          <button id='one'value='1' onClick={handleInput}>1</button>
          <button id='two'value='2' onClick={handleInput}>2</button>
          <button id='three'value='3' onClick={handleInput}>3</button>
          <button id='zero'value='0' onClick={handleInput}>0</button>
          <button id='decimal'value='.' onClick={handleInput}>.</button>
          <button id='equals'value='=' onClick={handleEquals}>=</button>
        </div>
      </div>
      <div id='author'>Disigned and coded by<br/>Katerina-Shche</div>
    </div>
  );
}

export default App;
