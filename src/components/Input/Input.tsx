import React, {ChangeEvent} from 'react';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type InputPropsType = {
    value: number
    setValue: (value: number) => void
    error: string
    findError: (value: number) => void

}

export const Input: React.FC<InputPropsType> = (props) => {
    const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
        props.findError(Number(e.currentTarget.value))

    }

    return (<div className={'input_wrapper'}>
            <input
                type="number"
                value={props.value}
                onChange={changeInputValueHandler}
                className={`input ${props.error ? 'error' : ''}`}/>
            <div className={'error_text'}>{props.error}</div>
        </div>


    );
};

