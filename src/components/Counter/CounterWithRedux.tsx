import React from 'react';
import {ButtonsBlock, Display} from "../../AppWithRedux";
import Button from "../Button/Button";
import styled, {css} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../state/store";
import {setDisplayAC, setNumberAC, SettingsType} from "../../state/counter-reducer";


export const CounterWithRedux: React.FC<{}> = ({}) => {
    const dispatch = useDispatch()
    const settings = useSelector<AppStateType, SettingsType>(state => state.counter.settings)
    const number = useSelector<AppStateType, number>(state => state.counter.number)

    const increaseNumber = () => {
        number < settings.maxValue && dispatch(setNumberAC(number+1))
    }
    const resetNumber = () => {
        dispatch(setNumberAC(settings.startValue))
    }
    const setSettingsDisplay = () => {
        dispatch(setDisplayAC('settings'))
    }

    return (
        <>
            <Display>
                <Number red={number === settings.maxValue}>{number}</Number>
            </Display>
            <ButtonsBlock>
                <Button title='inc' callback={increaseNumber}
                        disabled={number >= settings.maxValue}/>
                <Button title='reset' callback={resetNumber}
                        disabled={number === settings.startValue}/>
                <Button title='set' callback={setSettingsDisplay}/>
            </ButtonsBlock>
        </>
    )
}

const Number = styled.span<{red: boolean}>`
  font-size: 100px;
  ${props => props.red && css`
    color: red;
  `}
`