import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStoragw-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})


export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    console.log('state changed')
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store