import React from 'react';
import {displayType, settingsType} from "../../App";
import Settings from "../Settings/Settings";
import Button from "../Button/Button";

type CounterPropsType = {
    number: number
    className: string
    increaseNumber: () => void
    settings: settingsType
    resetNumber: () => void
    setDisplay: (display: displayType) => void
}

const Counter: React.FC<CounterPropsType> = (
    {
        increaseNumber,
        number,
        settings,
        resetNumber,
        setDisplay,
        className
    }
) => {

    const openSettingsHandler = () => {
        setDisplay('settings')
    }
    return (
        <>
            <div className={`display`}>
                <span className={`number ${className}`}>
                    {number}
                </span>
            </div>
            <div className='buttons_block'>
                <Button title='inc' callback={increaseNumber}
                        disabled={number >= settings.maxValue}/>
                <Button title='reset' callback={resetNumber}
                        disabled={number === settings.startValue}/>
                <Button title='set' callback={openSettingsHandler}
                        disabled={false}/>
            </div>
        </>
    )
}


export default Counter;