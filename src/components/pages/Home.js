import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Search from '../organisms/Search';
import MovieTable from '../molecules/MovieTable';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.media = {
      mobile: (...args) => css`
        @media (max-width: 768px) {
          ${ css(...args) }
        }
      `
    }
  }

  render() {
    const getMovies = (title) => {
      fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title='+title)
        .then(response => response.json())
        .then(result => {
          console.log(result.data);
          this.setState({ movies: result.data});
          setTimeout(document.getElementById('modalClose').click(), 500);
        })
        .catch(err => {
          console.error('Error:', err);
        });
    }

    const execKeyPress = (e) => { if(e.key === 'Enter') getMovies(e.target.value); }

    const Wrapper = styled.div`
      position: relative;
    `

    const MainSection = styled.section`
      overflow-y: scroll;
      height: 400px;
      position: relative;
      ${ this.media.mobile`height: 600px;` }
    `

    return (
      <Wrapper>
        <Search SearchInputKeyPress={execKeyPress} />
        <MainSection>
          <MovieTable data={this.state.movies} />
        </MainSection>
      </Wrapper>
    );
  }
}

export default Home;
