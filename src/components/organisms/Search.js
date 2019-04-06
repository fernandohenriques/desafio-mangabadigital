import React, { Component } from 'react';
import ModalSearch from '../molecules/ModalSearch';
import ButtonSearch from '../molecules/ButtonSearch';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { scale: 1, btnSearchActive: true, activeModal: 0 };
    this.SearchInput = null;
  }

  openModal() {
    if(this.state.btnSearchActive) {
      this.setState({ scale: 70, btnSearchActive: false, activeModal: 1 });
      document.body.style.overflow = 'hidden';
      if(this.SearchInput != null) this.SearchInput.focus();
    }
  }

  closeModal() {
    this.setState({ scale: 1, btnSearchActive: true, activeModal: 0 });
    document.body.style.overflow = 'auto';
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal.bind(this)}>
          <ButtonSearch scale={this.state.scale} active={this.state.activeModal?0:1} />
        </div>
        <ModalSearch
          closeClick={this.closeModal.bind(this)}
          active={this.state.activeModal}
          inputRef={ el => { this.SearchInput = el }}
          SearchInputKeyPress={this.props.SearchInputKeyPress}
        />
      </div>
    );
  }
}

export default Search;
