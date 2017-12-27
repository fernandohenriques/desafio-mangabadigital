import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

injectGlobal`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    color: #2d2d2d;
    letter-spacing: 0.2px;
  }
`;

// Components template and pages
import Main from './components/templates/Main';
import Home from './components/pages/Home';

const App = () => (
  <Main>
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </Main>
);

ReactDOM.render(<App />, document.getElementById('app'));
