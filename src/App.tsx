import * as React from 'react';

import Header from './components/Header/Header'

const { PureComponent, Fragment } = React;

class App extends PureComponent {
  public render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}

export default App;
