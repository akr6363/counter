import React, {useEffect, useState} from 'react';
import {displayType, settingsType} from "../../App";
import {Input} from "../Input/Input";
import Button from "../Button/Button";

type SettingsPropsType = {
    settings: settingsType
    setDisplay: (display: displayType) => void
    setSettings: (newSettings: settingsType) => void
    setNumber: (number: number) => void
}

const Settings: React.FC<SettingsPropsType> = (
    {
        settings,
        setDisplay,
        setSettings,
        setNumber
    }
) => {

    const [maxInputValue, setMaxInputValue] = useState<number>(settings.maxValue)
    const [startInputValue, setStartInputValue] = useState<number>(settings.startValue)

    const [errors, setErrors] = useState({
        'maxValue': '',
        'startValue': ''
    })

    useEffect(() => {

    })

    const findError = (value: number, inputName: string) => {
        setErrors({'maxValue': '', 'startValue': ''})
        if (inputName === 'maxValue') {
            if (value === startInputValue) {
                setErrors({...errors, maxValue: 'values can`t be equal'})
            }
            if (value < startInputValue) {
                setErrors({...errors, maxValue: 'value can`t be less started'})
            }
            if (value < 1) {
                setErrors({...errors, maxValue: 'max value can`t be less 1'})
            }
        }
        if (inputName === 'startValue') {
            if (value === maxInputValue) {
                setErrors({...errors, startValue: 'values can`t be equal'})
            }
            if (value > maxInputValue) {
                setErrors({...errors, startValue: 'value can`t be more max'})
            }
            if (value < 0) {
                setErrors({...errors, startValue: 'start value can`t be less 0'})
            }
        }

    }

    const changeSettingsHandler = () => {
        setSettings({
            maxValue: Number(maxInputValue),
            startValue: Number(startInputValue)
        })
        localStorage.setItem('startValue', JSON.stringify(startInputValue))
        localStorage.setItem('maxValue', JSON.stringify(maxInputValue))
        setDisplay('counter')
        setNumber(Number(startInputValue))
    }

    const isButtonDisabled = errors['maxValue'] !== '' || errors['startValue'] !== ''

    return (
        <>
            <div className={`display`}>
                <div className='settings_item'>
                    <span> max value:</span>
                    <Input value={maxInputValue}
                           setValue={setMaxInputValue}
                           error={errors['maxValue']}
                           findError={findError}
                           name={'maxValue'}
                    />
                </div>
                <div className='settings_item'>
                    <span> start value:</span>
                    <Input value={startInputValue}
                           setValue={setStartInputValue}
                           error={errors['startValue']}
                           findError={findError}
                           name={'startValue'}
                    />
                </div>
            </div>
            <div className='buttons_block'>
                <Button title='set' callback={changeSettingsHandler} disabled={isButtonDisabled}/>
            </div>
        </>
    )
}

export default Settings;