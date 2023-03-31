import React from 'react';
import {displayType, settingsType} from "../../App";
import Settings from "../Settings/Settings";

type CounterPropsType = {
    number: number
    className: string
    display: displayType
    maxInputValue: number
    startInputValue: number
    setMaxInputValue: (newValue: number) => void
    setStartInputValue: (newValue: number) => void
}

const Display: React.FC<CounterPropsType> = (
    {
        number,
        className,
        display,
        maxInputValue,
        startInputValue,
        setMaxInputValue,
        setStartInputValue
    }) => {
    return (
        <div className={`display`}>
            {display === 'counter' &&
                <span className={`number ${className}`}>
                {number}
                  </span>}
            {display === 'settings' &&
                <Settings maxInputValue={maxInputValue}
                          startInputValue={startInputValue}
                          setMaxInputValue={setMaxInputValue}
                          setStartInputValue={setStartInputValue}
                />
            }
        </div>
    );
};

export default Display;