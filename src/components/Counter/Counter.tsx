import React from 'react';

type CounterPropsType = {
    number: number
    className: string
}

const Counter: React.FC<CounterPropsType> = ({number, className}) => {
    return (
        <div className={`counter ${className}`}>
            {number}
        </div>
    );
};

export default Counter;