import React, { Component } from 'react';
import styled from 'styled-components';
import Collection from '../atoms/Collection';
import Item from '../atoms/CollectionItem';

class MovieTable extends Component {
  constructor(props){
    super(props);
  }

  renderItems(items) {
    if(items.length > 0)
      return items.map((li,i) =>
         (<Item poster={li.Poster} title={li.Title} type={li.Type} year={li.Year} imdbID={li.imdbID} key={i} />)
      );
    else
      return (<li>Nenhum filme pesquisado até o momento...</li>);
  }

  render() {
    /*const Items = (props) => {
      if(props.data.length > 0) {
        return (
            {props.data.map((li,i) => {
              return (<Item poster={li.poster} title={li.title} type={li.type} year={li.year} imdbID={li.imdbID} />);
            })}
        );
      } else return (<li>Nenhum filme pesquisado até o momento...</li>);
    }*/

    return (
      <Collection>
        {this.renderItems(this.props.data)}
      </Collection>
    );
  }
}

export default MovieTable;
