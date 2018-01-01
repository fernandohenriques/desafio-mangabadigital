import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const styleH = `
  color: #fff;
  font-weight: 300;
  margin: .67em 0;
`;

const H1 = styled.h1([styleH]);
const H2 = styled.h2([styleH]);

export default (props) => {
  if(props.type == 'h1') return (<H1>{props.text}</H1>);
  else return (<H2>{props.text}</H2>);
}
