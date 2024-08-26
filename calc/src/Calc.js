import React, { useState } from "react";
import "./Calc.css";
import { FaRegSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
const Calc = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');
    const [firstOperand, setFirstOperand] = useState(null);
    const [secOperand, setSecondOperand] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const clearDisp = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setSecondOperand(false);
        setOperator(null);
    }


    const setNumber = (num) => {
        if (secOperand) {
            setDisplayValue(displayValue + num);
            setSecondOperand(false);
        } else {
            setDisplayValue(displayValue == '0' ? num : displayValue + num);

        }

    }
    const calcOperation = (operators) => {
        if (firstOperand == null || operators != null) {
            setDisplayValue(displayValue + operators);
        }
        setSecondOperand(true);
        setOperator(operators);
    }
    const result = () => {
        let value = hasTrailingOperator(displayValue);
       if(!value){
        let ans = eval(displayValue);
        setDisplayValue(ans);
        setFirstOperand(ans);
       }else{
        setDisplayValue(displayValue);
        setFirstOperand(displayValue);
       }
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    }
    const handleBackspace = () => {
        setDisplayValue(displayValue.length > 1 ? displayValue.slice(0, -1) : '0');
    };
function hasTrailingOperator(value){
    const strValue = String(value);
    const lastChar = strValue.slice(-1);
        return /[+\-*/]/.test(lastChar);
}

    return (
        <>
            <div className={`calculator ${darkMode ? 'dark-mode' : ''}`}>
                <div className="d-flex justify-content-end toggle_butt">
                    <input type="checkbox" className=" theme-toggle checkbox " onClick={toggleTheme} id="checkbox" hidden/>
                    <label htmlFor="checkbox" className="checkbox-label">
                        <i className="fas fa-sun"><FaRegSun /></i>
                        <i className="fas fa-moon"><FaMoon /></i>
                        <span className="ball" />
                    </label>
                </div>
                <div className="calculator__output">{displayValue}</div>
                <div className="calculator__keys">
                    <button
                        className="calculator__key calculator__key--operator"
                        onClick={() => calcOperation('+')}
                    >+</button>
                    <button
                        className="calculator__key calculator__key--operator"
                        onClick={() => calcOperation('-')}
                    >-</button>
                    <button
                        className="calculator__key calculator__key--operator"
                        onClick={() => calcOperation('*')}
                    >×</button>
                    <button
                        className="calculator__key calculator__key--operator"
                        onClick={() => calcOperation('/')}
                    >÷</button>
                    <button
                        className="calculator__key"
                        onClick={() => setNumber('7')}
                    >7</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('8')}
                    >8</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('9')}
                    >9</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('4')}
                    >4</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('5')}
                    >5</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('6')}
                    >6</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('1')}
                    >1</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('2')}
                    >2</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('3')}
                    >3</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('0')}
                    >0</button>
                    <button className="calculator__key"
                        onClick={() => setNumber('.')}
                    >.</button>
                    <button className="calculator__key"
                        onClick={clearDisp}
                    >AC</button>
                    <FaBackspace className="calculator__key"
                        onClick={handleBackspace}
                    ></FaBackspace>
                    <button
                        className="calculator__key calculator__key--enter"
                        onClick={result}
                    >=</button>

                </div>
            </div>


        </>
    )
}
export default Calc;