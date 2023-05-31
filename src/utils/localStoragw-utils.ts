import {AppStateType} from "../state/store";
import {initialState, SettingsType} from "../state/counter-reducer";

export const saveState = (settings: SettingsType) => {
    try {
        const serializedState = JSON.stringify(settings);
        localStorage.setItem('settings', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('settings');
        if (serializedState === null) {
            return undefined;
        }
        return {
            counter: {
                ...initialState,
                settings: JSON.parse(serializedState),
                number: JSON.parse(serializedState).startValue,
            }
        }
    } catch (err) {
        return undefined;
    }
};

