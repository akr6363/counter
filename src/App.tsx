import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";

export type displayType = 'counter' | 'settings'
export type settingsType = {
    maxValue: number
    startValue: number
}


function App() {

    const getMaxValue = () => {
        const maxValueLS = localStorage.getItem('maxValue')
        return maxValueLS ? JSON.parse(maxValueLS) : 10
    }

    const startMaxValue = () => {
        const startValueLS = localStorage.getItem('startValue')
        return startValueLS ? JSON.parse(startValueLS) : 0
    }

    const [settings, setSettings] = useState<settingsType>({
        maxValue: getMaxValue(),
        startValue: startMaxValue()
    })

    const [number, setNumber] = useState<number>(settings.startValue)
    const [display, setDisplay] = useState<displayType>('counter')


    const increaseNumber = () => {
        number < settings.maxValue && setNumber(number + 1)
    }
    const resetNumber = () => {
        setNumber(settings.startValue)
    }

    return (
        <div className={'wrapper'}>
            <div className={'App'}>
                {display === 'settings' &&
                    <Settings settings={settings}
                              setDisplay={setDisplay}
                              setSettings={setSettings}
                              setNumber={setNumber}/>}
                {display === 'counter' &&
                    <Counter increaseNumber={increaseNumber}
                             number={number}
                             settings={settings}
                             resetNumber={resetNumber}
                             setDisplay={setDisplay}
                             className={number === settings.maxValue ? 'red' : ''}
                    />}
            </div>
        </div>
    );
}

export default App;






