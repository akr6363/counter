import React from 'react';
import './App.css';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "./state/store";
import SettingsWithRedux from "./components/Settings/SettingsWithRedux";
import {CounterWithRedux} from "./components/Counter/CounterWithRedux";
import {displayType} from "./state/counter-reducer";

export const AppWithRedux = () => {
    const display = useSelector<AppStateType, displayType>(state => state.counter.display)
    return (
        <Wrapper>
            <Container>
                {display === 'settings' &&
                   <SettingsWithRedux/>}
                {display === 'counter' &&
                    <CounterWithRedux/>}
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div `
  display: flex;
  align-items: stretch;
  height: 300px;
`

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  border: 5px solid aquamarine;
  border-radius: 20px;
  padding: 15px;
  width: 420px;
`

export const Display = styled.div `
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;
  flex-grow: 1;
  color: green;
  font-weight: bold;
  padding: 0px 40px;
`

export const ButtonsBlock = styled.div `
  display: flex;
  justify-content: space-around;
  border: 5px solid aquamarine;
  border-radius: 20px;
  padding: 15px 10px;
  -webkit-user-select: none;
`


