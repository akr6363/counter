import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

export type displayType = 'counter' | 'settings'
export type settingsType = {
    maxValue: number
    startValue: number
}


function App() {

    const getMaxValue = () => {
        let maxValueLS = localStorage.getItem('maxValue')
        return maxValueLS ? JSON.parse(maxValueLS) : 10
    }

    const startMaxValue = () => {
        let startValueLS = localStorage.getItem('startValue')
        return startValueLS ? JSON.parse(startValueLS) : 0
    }

    let [settings, setSettings] = useState<settingsType>({
        maxValue: getMaxValue(),
        startValue: startMaxValue()
    })

    let [number, setNumber] = useState<number>(settings.startValue)
    let [display, setDisplay] = useState<displayType>('counter')
    // let [inputValues, setInputValues] = useState<settingsType>({
    //     maxValue: settings.maxValue,
    //     startValue: settings.startValue
    // })
    //
    let [maxInputValue, setMaxInputValue] = useState<number>(settings.maxValue)
    let [startInputValue, setStartInputValue] = useState<number>(settings.startValue)

    const increaseNumber = () => {
        number < settings.maxValue && setNumber(number + 1)
    }
    const resetNumber = () => {
        setNumber(settings.startValue)
    }
    const openSettings = () => {
        setDisplay('settings')
    }
    const changeSettings = () => {
        localStorage.setItem('startValue', JSON.stringify(startInputValue))
        localStorage.setItem('maxValue', JSON.stringify(maxInputValue))
        setSettings({startValue: startInputValue, maxValue: maxInputValue})
        setNumber(startInputValue)
        setDisplay('counter')
    }


    return (
        <div className={'wrapper'}>
            <div className="App">
                <Display number={number}
                         className={number === settings.maxValue ? 'red' : ''}
                         display={display}
                         maxInputValue={maxInputValue}
                         startInputValue={startInputValue}
                         setMaxInputValue={setMaxInputValue}
                         setStartInputValue={setStartInputValue}
                />
                <div className='buttons_block'>
                    {display === 'counter' &&
                        <>
                            <Button title='inc' callback={increaseNumber}
                                    disabled={number >= settings.maxValue}/>
                            <Button title='reset' callback={resetNumber}
                                    disabled={number === settings.startValue}/>
                            <Button title='set' callback={openSettings}
                                    disabled={false}/>
                        </>
                    }
                    {display === 'settings' &&
                        <Button title='set' callback={changeSettings} disabled={false}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
