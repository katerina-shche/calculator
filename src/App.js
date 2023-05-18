import { evaluate } from 'mathjs';
//styles
import { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('0')

  const handleClear = () => {
    setInput('')
    setOutput('0')
  }
  const handleInput = (e) => {
   if ((/=/g).test(input)) {
      setInput(e.target.value)
      setOutput(e.target.value)
    } else {
        setInput(input+e.target.value)
        setOutput((input+e.target.value).match(/[\d.]+$/))
      }
  }

  const handleOperator = (e) => {
    if (e.target.value !== '-' && input === '') {
      console.log('this operator is not alowed now')
    } else if ((/[+/-*/]/g).test(input.slice(-1)) && e.target.value === '-') {
      setInput(input+e.target.value)
      setOutput(e.target.value)
    } else if ((/[+\-*/.]/g).test(input.slice(-1))) {
      setInput(input.slice(0, -1)+e.target.value)
      setOutput(e.target.value)
    } else {
    setInput(input+e.target.value)
    setOutput(e.target.value)
    }
  }


  const handleDecimal = () => {
    if ((input === '') || input.includes('=')) {
      setInput('0.')
      setOutput('0.')
    } else if (!output.toString().includes('.') && output.slice(-1)[0].match(/\d/)) {
      setInput(input+'.')
      setOutput(output+'.')
    } else { console.log('dot is not allowed now')
    }

  }
  const handleEquals = (e) => {
    if (input === '' || input === '.') {
      setOutput('0')
      setInput('')
    } else if (!input.includes('=')) {
      let equals = evaluate(input)  
      setInput(input+e.target.value+equals)
      setOutput(equals)
  } else {
    console.log('equals is not allowed now')
  }
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
          <button id='divide'value='/' onClick={handleOperator}>/</button>
          <button id='multiply'value='*' onClick={handleOperator}>x</button>
          <button id='seven'value='7' onClick={handleInput}>7</button>
          <button id='eight'value='8' onClick={handleInput}>8</button>
          <button id='nine'value='9' onClick={handleInput}>9</button>
          <button id='substruct'value='-' onClick={handleOperator}>-</button>
          <button id='four'value='4' onClick={handleInput}>4</button>
          <button id='five'value='5' onClick={handleInput}>5</button>
          <button id='six'value='6' onClick={handleInput}>6</button>
          <button id='add'value='+' onClick={handleOperator}>+</button>
          <button id='one'value='1' onClick={handleInput}>1</button>
          <button id='two'value='2' onClick={handleInput}>2</button>
          <button id='three'value='3' onClick={handleInput}>3</button>
          <button id='zero'value='0' onClick={handleInput}>0</button>
          <button id='decimal'value='.' onClick={handleDecimal}>.</button>
          <button id='equals'value='=' onClick={handleEquals}>=</button>
        </div>
      </div>
      <div id='author'>Disigned and coded by<br/>Katerina-Shche</div>
    </div>
  );
}

export default App;
