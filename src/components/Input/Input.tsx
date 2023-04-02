import React, {ChangeEvent} from 'react';
import styled, {css} from "styled-components";


type InputPropsType = {
    value: number
    setValue: (value: number) => void
    error: string
}

export const Input: React.FC<InputPropsType> = (props) => {
    const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
    }

    return (<InputWrapper>
            <StyledInput
                error={props.error !== ''}
                type="number"
                value={props.value}
                onChange={changeInputValueHandler}
                />
            <ErrorText>{props.error}</ErrorText>
        </InputWrapper>


    );
};

const InputWrapper = styled.div`
  position: relative;
`

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  position: absolute;
  margin-left: 10px;
`

const StyledInput = styled.input<{error: boolean}>`
  border-radius: 20px;
  border: none;
  padding: 10px 10px;
  text-align: center;
  font-weight: bold;
  width: 150px;
  outline: none;
  
  ${props => props.error && css`
    outline: 2px solid red;
    color: red;
  `}
`