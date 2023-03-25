import React from 'react';

type ButtonType = {
    title: string
    callback: () => void
    disabled: boolean
}

const Button:React.FC<ButtonType> = ({title, callback, disabled}) => {

    return (
        <button disabled={disabled} onClick={callback} className='button'>{title}</button>
    );
};

export default Button;