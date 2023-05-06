import React, {useEffect} from 'react';
import {ButtonsBlock, Display} from "../../AppWithRedux";
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../state/store";

import {
    ErrorsType,
    setDisplayAC,
    setErrorsAC,
    setMaxSettingsAC,
    setNumberAC, setStartSettingsAC,
    SettingsType
} from "../../state/counter-reducer";


const Settings: React.FC<{}> = ({}) => {
    const dispatch = useDispatch()
    const settings = useSelector<AppStateType, SettingsType>(state => state.counter.settings)
    const errors = useSelector<AppStateType, ErrorsType>(state => state.counter.errors)

    useEffect(() => {
        dispatch(setErrorsAC());
    }, [settings.maxValue, settings.startValue]);

    const changeSettingsHandler = () => {
        dispatch(setDisplayAC('counter'))
        dispatch(setNumberAC(settings.startValue))
    }

    const isButtonDisabled = errors.maxInputError !== '' || errors.startInputError !== ''

    const setMaxSettings = (maxValue: number) => {
            dispatch(setMaxSettingsAC(maxValue));
    }
    const setStartSettings = (startValue: number) => {
        dispatch(setStartSettingsAC(startValue))
    }

    return (
        <>
            <Display>
                <SettingsItem>
                    <span> max value:</span>
                    <Input value={settings.maxValue}
                           setValue={setMaxSettings}
                           error={errors.maxInputError}
                    />
                </SettingsItem>
                <SettingsItem>
                    <span> start value:</span>
                    <Input value={settings.startValue}
                           setValue={setStartSettings}
                           error={errors.startInputError}
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

