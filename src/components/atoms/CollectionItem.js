import React from 'react';
import styled from 'styled-components';
import MovieImg from '../../assets/img/movie.png';

const Item = styled.li`
  min-height: 84px;
  position: relative;
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  padding-left: 72px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
  &:last-child{
    border-bottom: 0px;
  }
`;

const ImgCircle = styled.img`
  position: absolute;
  left: 15px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
`;

const Span = styled.span`font-size: 16px;`;

const IconLink = styled.a`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export default (props) => {
  return (
          <Item>
            <ImgCircle src={props.poster=="N/A"?MovieImg:props.poster} />
            <Span>{props.title}</Span>
            <p>Tipo: {props.type} <br /> Ano: {props.year}</p>
            <IconLink href={'http://www.imdb.com/title/' + props.imdbID + '/'} target="_blank"><i className="material-icons">movie</i></IconLink>
          </Item>
        );
}
