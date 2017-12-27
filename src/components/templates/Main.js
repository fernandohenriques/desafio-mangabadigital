import React, { Component } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
