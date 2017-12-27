import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 80px;
  position: absolute;
  top: 30%;
  left: 50px;
  margin-top: -40px;
  opacity: ${props => props.opacity};
  transform: translate(40px, 0);
  transition: all 0.3s ease-in-out;
  z-index: 2;
`

const Input = styled.input.attrs({type:'text',placeholder:'Nome do filme...'})`
  color: #fff;
  font-size: 54px;
  border: 0;
  background: transparent;
  -webkit-appearance: none;
  box-sizing: border-box;
  outline: 0;
  font-weight: 200;
  &::-webkit-input-placeholder {
    color: #eee;
  }
  &:-moz-placeholder {
    color: #eee;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #eee;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #eee;
  }
`;

export default (props) => {
  return (
    <Wrapper opacity={props.opacity}>
      <Input innerRef={props.inputRef} onKeyPress={props.onKeyPress} />
    </Wrapper>
  );
}
