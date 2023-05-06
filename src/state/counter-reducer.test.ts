import {
    counterReducer,
    setDisplayAC,
    setErrorsAC,
    setMaxSettingsAC, setNumberAC,
    setStartSettingsAC,
    SettingsStateType
} from "./counter-reducer";

let startState: SettingsStateType

beforeEach(() => {
    startState = {
        settings: {
            maxValue: 10,
            startValue: 0,
        },
        errors: {
            maxInputError: '',
            startInputError: '',
        },
        display: 'counter',
        number: 0
    }
})


test('start value should be set', () => {
const endState = counterReducer(startState, setStartSettingsAC(5))
    expect(endState.settings.startValue).toBe(5)
    expect(startState.settings.startValue).toBe(0)
})

test('max value should be set', () => {
    const endState = counterReducer(startState, setMaxSettingsAC(15))
    expect(endState.settings.maxValue).toBe(15)
    expect(startState.settings.maxValue).toBe(10)
})

test('start input error should be set, because value less than 0', () => {
    startState.settings.startValue = -1
    let endState = counterReducer(startState, setErrorsAC())
    expect(endState.errors.startInputError).toBe('start value can\'t be less 0')
    expect(endState.errors.maxInputError).toBe('')
})

test('max input error should be set, because value less than 1', () => {
    startState.settings.maxValue = 0
    let endState = counterReducer(startState, setErrorsAC())
    expect(endState.errors.maxInputError).toBe('max value can\'t be less 1')
    expect(endState.errors.startInputError).toBe('')
})

test('max and start input errors should be set, because their values equal', () => {
    startState.settings.startValue = 10
    let endState = counterReducer(startState, setErrorsAC())
    expect(endState.errors.maxInputError).toBe('values can\'t be equal')
    expect(endState.errors.startInputError).toBe('values can\'t be equal')
})

test('max and start input errors should be set, because start value more than max', () => {
    startState.settings.startValue = 15
    let endState = counterReducer(startState, setErrorsAC())
    expect(endState.errors.maxInputError).toBe('value can\'t be less started')
    expect(endState.errors.startInputError).toBe('value can\'t be more max')
})

test('display should be changed to settings', () => {
    const endState = counterReducer(startState, setDisplayAC('settings'))
    expect(endState.display).toBe('settings')
    expect(startState.display).toBe('counter')
})

test('number in counter should be changed', () => {
    const endState = counterReducer(startState, setNumberAC(1))
    expect(endState.number).toBe(1)
    expect(startState.number).toBe(0)
})






