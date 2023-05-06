import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import Settings from "./components/Settings/Settings";
import styled from "styled-components";

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

    const getStartValue = () => {
        const startValueLS = localStorage.getItem('startValue')
        return startValueLS ? JSON.parse(startValueLS) : 0
    }

    const [settings, setSettings] = useState<settingsType>({
        maxValue: getMaxValue(),
        startValue: getStartValue()
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
        <Wrapper>
            <Container>
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
                    />}
            </Container>
        </Wrapper>
    );
}

export default App;


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


