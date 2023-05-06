import React from 'react';
import {ButtonsBlock, Display, displayType, settingsType} from "../../App";
import Settings from "../Settings/Settings";
import Button from "../Button/Button";
import styled, {css} from "styled-components";

type CounterPropsType = {
    number: number
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
    }
) => {

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
                <Button title='set' callback={()=> setDisplay('settings')}
                        disabled={false}/>
            </ButtonsBlock>
        </>
    )
}


export default Counter;

const Number = styled.span<{red: boolean}>`
  font-size: 100px;
  ${props => props.red && css`
    color: red;
  `}
`