import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStoragw-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})


 export const store = legacy_createStore(rootReducer, loadState())
//
// store.subscribe(() => {
//     console.log('state changed')
//     saveState({
//         counter: store.getState().counter
//     });
// });

let prevState = store.getState();

store.subscribe(() => {
    const state = store.getState();
    if (state.counter.settings !== prevState.counter.settings) {
        console.log('Settings have changed:', state.counter.settings);
        saveState(state.counter.settings);
        prevState = state;
    }
});


export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store