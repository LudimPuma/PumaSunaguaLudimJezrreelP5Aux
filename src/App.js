import React, { useState } from 'react'
import "./App.css";
const App = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () =>{
        setResult("");
    }
    const calculate = () =>{
        try {
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error");
        }
    }
    return (
        <>      <h1>Práctica 5</h1>
                <div className="container">
                    <h1>Calculadora</h1> 
                    <form>
                        <input type="text" placeholder={result} />
                    </form>

                    <div className="keypad">
                        <button onClick={clear} id="AC">AC</button>
                        <button name="/" onClick={handleClick}>/</button>
                        <button name="*" onClick={handleClick}>*</button>
                        <button name="-" onClick={handleClick}>-</button>
                        <button name="7" onClick={handleClick}>7</button>
                        <button name="8" onClick={handleClick}>8</button> 
                        <button name="9" onClick={handleClick}>9</button>
                        <button name="+" className= "highlight" onClick={handleClick} id="suma">+</button>
                        <button name="4" onClick={handleClick}>4</button>
                        <button name="5" onClick={handleClick}>5</button>
                        <button name="6" onClick={handleClick}>6</button>
                        <button onClick={calculate} className= "highlight" id="resta">=</button>
                        <button name="1" onClick={handleClick}>1</button>
                        <button name="2" onClick={handleClick}>2</button>
                        <button name="3" onClick={handleClick}>3</button>
                        <button name="0" onClick={handleClick} className= "highlight" id="cero">0</button>
                        <button name="." onClick={handleClick}>.</button>     
                    </div>


                </div>
        </>
    )
}
export default App;