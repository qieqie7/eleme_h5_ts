import * as React from 'react';
import * as styles from './App.styl';

import instance from './API/api';
import logoSvg from './logo.svg';

class App extends React.Component {
  public componentWillMount() {
    // tslint:disable
    instance.get('/test').then(data => console.log(data))
  }

  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logoSvg} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
