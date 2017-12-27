import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../atoms/Link';

const media = {
  mobile: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: #22313f;
  color: #fff;
  text-align: center;
  z-index: 1;
  ${ media.mobile`
      position: absolute;
  ` }
`
const Meta = styled.span`
  color: #999
`

export default () => (
  <Footer>
    <Meta>por</Meta> Fernando Henriques, com CSS inspirado em trabalho de <Link href="https://codepen.io/hone/pen/jERzmd" target="_blank">Luca Dimola</Link>.
  </Footer>
);
