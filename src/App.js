import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const onChangeResult = (event) => {
    setResult(event.target.name);
  }

  const onClearResult = () => {
    setResult("");
  }

  const onBackSpace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const onHandleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const onCaculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  }
  return (
    <div className="basic-caculator">
      <form>
        <input type='text' value={result} onChange={onChangeResult} />
      </form>

      <div className='keyboard'>
        <button className='highlight' id='clear' onClick={onClearResult}>Clear</button>
        <button className='highlight' id='backspace' onClick={onBackSpace} name='C'>C</button>
        <button className='highlight' onClick={onHandleClick} name='/'>&divide;</button>
        <button onClick={onHandleClick} name='7'>7</button>
        <button onClick={onHandleClick} name='8'>8</button>
        <button onClick={onHandleClick} name='9'>9</button>
        <button className='highlight' onClick={onHandleClick} name='*'>&times;</button>
        <button onClick={onHandleClick} name='4'>4</button>
        <button onClick={onHandleClick} name='5'>5</button>
        <button onClick={onHandleClick} name='6'>6</button>
        <button className='highlight' onClick={onHandleClick} name='-'>&ndash;</button>
        <button onClick={onHandleClick} name='1'>1</button>
        <button onClick={onHandleClick} name='2'>2</button>
        <button onClick={onHandleClick} name='3'>3</button>
        <button className='highlight' onClick={onHandleClick} name='+'>+</button>
        <button onClick={onHandleClick} name='0'>0</button>
        <button onClick={onHandleClick} name='.'>.</button>
        <button className='highlight' id='result' onClick={onCaculate} name='='>=</button>
      </div>

    </div>
  );
}

export default App;
