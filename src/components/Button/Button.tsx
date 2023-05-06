import React from 'react';
import styled from "styled-components";

type ButtonType = {
    title: string
    callback: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonType> = ({title, callback, disabled= false}) => {
    return (
        <StyledButton disabled={disabled}
                onClick={callback}
                className='button'>
            {title}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
  display: block;
  padding: 5px 15px;
  border: none;
  border-radius: 20px;
  background-color: aquamarine;
  font-size: 45px;
  font-weight: bold;
  color: #475d8a;
  cursor: pointer;
  &:hover {
    background-color: #2bcb99;
  }
  &:disabled {
    background-color: rgba(144, 144, 145, 0.8);
    cursor: not-allowed;
  }
`