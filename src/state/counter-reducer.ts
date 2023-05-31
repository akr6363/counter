import settings from "../components/Settings/Settings";

const SET_START_SETTINGS = 'SET_START_SETTINGS'
const SET_MAX_SETTINGS = 'SET_MAX_SETTINGS'
const SET_ERRORS = 'SET_ERRORS'
const SET_DISPLAY = 'SET_DISPLAY'
const SET_NUMBER = 'SET_NUMBER'


export type displayType = 'counter' | 'settings'

export type SettingsType = {
    maxValue: number
    startValue: number
}
export type ErrorsType = {
    maxInputError: string
    startInputError: string
}
export type SettingsStateType = {
    settings: SettingsType
    errors: ErrorsType
    display: displayType,
    number: number
}


type setStartSettingsAC = ReturnType<typeof setStartSettingsAC>
type setMaxSettingsAC = ReturnType<typeof setMaxSettingsAC>
type SetErrorsActionType = ReturnType<typeof setErrorsAC>
type SetDisplayActionType = ReturnType<typeof setDisplayAC>
type SetNumberActionType = ReturnType<typeof setNumberAC>

type SettingReducerActionType = setStartSettingsAC | setMaxSettingsAC | SetErrorsActionType |  SetDisplayActionType | SetNumberActionType

export const initialState: SettingsStateType = {
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

export const counterReducer = (state: SettingsStateType = initialState, action: SettingReducerActionType): SettingsStateType => {
    switch (action.type) {
        case SET_START_SETTINGS:
            return {
                ...state,
                settings:
                    {
                        ...state.settings,
                        startValue: action.startValue
                    }
            }
        case SET_MAX_SETTINGS:
            return {
                ...state,
                settings:
                    {
                        ...state.settings,
                        maxValue: action.maxValue
                    }
            }
        case SET_ERRORS:
            let maxInputError: string = ''
            let startInputError: string = ''

            if (state.settings.maxValue < 1) {
                maxInputError = 'max value can\'t be less 1';
            }
            if (state.settings.startValue < 0) {
                startInputError = 'start value can\'t be less 0';
            }
            if (state.settings.maxValue >= 1 && state.settings.startValue >= 0) {
                if (state.settings.maxValue === state.settings.startValue) {
                    maxInputError = 'values can\'t be equal';
                    startInputError = 'values can\'t be equal';
                }
                if (state.settings.maxValue < state.settings.startValue) {
                    maxInputError = 'value can\'t be less started';
                    startInputError = 'value can\'t be more max';
                }
            }
            return {
                ...state,
                errors:
                    {
                        ...state.errors,
                        maxInputError: maxInputError,
                        startInputError: startInputError
                    }
            }
        case SET_DISPLAY:
            return {...state,
                display: action.display}
        case SET_NUMBER:
            return {...state,
                number: action.number}
        default:
            return state
    }
}


export const setStartSettingsAC = (startValue: number) => ({
    type: SET_START_SETTINGS, startValue
} as const)
export const setMaxSettingsAC = (maxValue: number) => ({
    type: SET_MAX_SETTINGS, maxValue
} as const)
export const setErrorsAC = () => ({
    type: SET_ERRORS
} as const)
export const setDisplayAC = (display: displayType) => ({
    type: SET_DISPLAY, display
} as const)
export const setNumberAC = (number: number) => ({
    type: SET_NUMBER, number
} as const)