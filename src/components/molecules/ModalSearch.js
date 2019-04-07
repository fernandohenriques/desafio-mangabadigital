import React from 'react';
import styled from 'styled-components';
import SearchInput from '../atoms/SearchInput';

const IconClose = styled.i.attrs({className:'material-icons icon-close'})`
  position: fixed;
  top: 30px;
  right: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 70px;
  opacity: ${props => props.opacity};
  transform: rotate(${props => props.opacity==0?'0':'-90deg'});
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  z-index: 2;
`;

export default (props) => {
  return (
    <div>
      <IconClose id="modalClose" onClick={props.closeClick} opacity={props.active} >close</IconClose>
      <SearchInput opacity={props.active} inputRef={props.inputRef} onKeyPress={props.SearchInputKeyPress} />
    </div>
  );
}
