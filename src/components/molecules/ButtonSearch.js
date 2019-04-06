import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonCircle from '../atoms/ButtonCircle';

const IconSearch = styled.i.attrs({className:'material-icons icon-material-search'})`
  color: #fff;
  position: absolute;
  top: -10px;
  right: 78px;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  opacity: ${props => props.opacity};
  z-index: 2;
`;

export default (props) => {
  return (
    <div>
      <ButtonCircle scale={props.scale} />
      <IconSearch opacity={props.active}>search</IconSearch>
    </div>
  );
}
