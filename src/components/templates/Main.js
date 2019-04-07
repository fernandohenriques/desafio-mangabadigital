import React, { Component } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

class Main extends Component {
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
