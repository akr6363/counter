import React, {ChangeEvent, useState} from 'react';
import {settingsType} from "../../App";
import {Input} from "../Input/Input";

type SettingsType = {
    maxInputValue: number
    startInputValue: number
    setMaxInputValue: (newValue: number) => void
    setStartInputValue: (newValue: number) => void
}

const Settings: React.FC<SettingsType> = (
    {
        maxInputValue,
        startInputValue,
        setMaxInputValue,
        setStartInputValue
    }) => {

    // const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (Number(e.currentTarget.value) < 1) {
    //         setError('Incorrect value!')
    //     }
    //     setInputValues({...inputValues, maxValue: Number(e.currentTarget.value)})
    // }
    // const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setInputValues({...inputValues, startValue: Number(e.currentTarget.value)})
    // }

    const [error, setError] = useState({
        'maxValueInput': '',
        'startValueInput': '',
    })

    // if(startInputValue < 0) {
    //     setError({...error, startValueInput: 'Incorrect value'})
    // }

    const findError = (value: number) => {
        setError({'maxValueInput': '',  'startValueInput': ''})
        if (value < 0) {
            setError({...error, startValueInput: 'Incorrect value'})
        }
    }

    return (
        <>
            <div className='settings_item'>
                <span> max value:</span>
                <Input value={maxInputValue}
                       setValue={setMaxInputValue}
                       error={error['maxValueInput']}
                       findError={findError}
                />
                {/*<input type="number" onChange={setMaxValueHandler} value={inputValues.maxValue}/>*/}
            </div>
            <div className='settings_item'>
                <span> start value:</span>
                {/*<input type="text" onChange={setStartValueHandler} value={inputValues.startValue}/>*/}
                <Input value={startInputValue}
                       setValue={setStartInputValue}
                       error={error['startValueInput']}
                       findError={findError}/>
            </div>
        </>
    );
};

export default Settings;