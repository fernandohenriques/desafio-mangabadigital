import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';

const Header = styled.div`
  position: relative;
  background: #22313f;
  padding: 44.8px 50px;
`

export default () => (
  <Header>
    <Title type="h1" text="Encontre os filmes mais inusitados..." />
    <Title type="h2" text="Busque pelo título do filme" />
  </Header>
);
