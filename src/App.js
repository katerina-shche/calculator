//styles
import { useState } from 'react';
import './App.css';


function App() {
  const [input, setInput] = useState('12-3.4+56*78/90=')
  const [output, setOutput] = useState(0)
  return (
    <div id="App">
      <div id='calculator'>
        <div id='display'> 
          <div id='input'>{input}</div>
          <div id='output'>{output}</div>
        </div>
        <div id='buttons'>
          <button id='clear' >AC</button>
          <button id='divide'>/</button>
          <button id='multiply'>x</button>
          <button id='seven'>7</button>
          <button id='eight'>8</button>
          <button id='nine'>9</button>
          <button id='substruct'>-</button>
          <button id='four'>4</button>
          <button id='five'>5</button>
          <button id='six'>6</button>
          <button id='add'>+</button>
          <button id='one'>1</button>
          <button id='two'>2</button>
          <button id='three'>3</button>
          <button id='zero'>0</button>
          <button id='decimal'>.</button>
          <button id='equals'>=</button>
        </div>
      </div>
      <div id='author'>by katerina-shche</div>
    </div>
  );
}

export default App;
