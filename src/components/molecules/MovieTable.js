import React, { Component } from 'react';
import Item from '../atoms/CollectionItem';
import Collection from '../atoms/Collection';

class MovieTable extends Component {
  constructor(props) {
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
    const { data } = this.props;

    return (
      <Collection>
        {this.renderItems(data)}
      </Collection>
    );
  }
}

export default MovieTable;
