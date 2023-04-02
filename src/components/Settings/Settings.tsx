import React, {useEffect, useState} from 'react';
import {ButtonsBlock, Display, displayType, settingsType} from "../../App";
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import styled from "styled-components";

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
        maxInputValue: '',
        startInputValue: ''
    })

    useEffect(() => {
        findError(maxInputValue, startInputValue);
    }, [maxInputValue, startInputValue]);


    const findError = (maxInputValue: number, startInputValue: number) => {
        const errors = {
            maxInputValue: '',
            startInputValue: ''
        };
        if (maxInputValue < 1) {
            errors.maxInputValue = 'max value can\'t be less 1';
        }
        if (startInputValue < 0) {
            errors.startInputValue = 'start value can\'t be less 0';
        }
        if (maxInputValue > 1 && startInputValue > 0) {
            if (maxInputValue === startInputValue) {
                errors.maxInputValue = 'values can\'t be equal';
                errors.startInputValue = 'values can\'t be equal';
            }
            if (maxInputValue < startInputValue) {
                errors.maxInputValue = 'value can\'t be less started';
                errors.startInputValue = 'value can\'t be more max';
            }
        }
        setErrors(errors);
    };

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

    const isButtonDisabled = errors.maxInputValue !== '' || errors.startInputValue !== ''

    return (
        <>
            <Display>
                <SettingsItem>
                    <span> max value:</span>
                    <Input value={maxInputValue}
                           setValue={setMaxInputValue}
                           error={errors.maxInputValue}
                    />
                </SettingsItem>
                <SettingsItem>
                    <span> start value:</span>
                    <Input value={startInputValue}
                           setValue={setStartInputValue}
                           error={errors.startInputValue}
                    />
                </SettingsItem>
            </Display>
            <ButtonsBlock>
                <Button title='set' callback={changeSettingsHandler} disabled={isButtonDisabled}/>
            </ButtonsBlock>
        </>
    )
}

export default Settings;

const SettingsItem = styled.div`
  font-size: 25px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`