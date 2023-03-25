import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";

function App() {

    const maxValue = 5
    let [number, setNumber] = useState<number>(0)

    const increaseNumber = () => {
        number < maxValue && setNumber(number + 1)
    }

    const resetNumber = () => {
        setNumber(0)
    }

    return (
        <div className="App">
            <Counter number={number} className={number === maxValue ? 'red' : ''}/>
            <div className='buttons_block'>
                <Button title='inc' callback={increaseNumber} disabled={number >= maxValue}/>
                <Button title='reset' callback={resetNumber} disabled={number === 0}/>
            </div>
        </div>
    );
}

export default App;
