import * as React from 'react';
import * as styles from './App.styl';

import logo from './logo.svg';

const a = { 
  b: 5,
}

class App extends React.Component {
  public render() {
    const b= a.b;
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload. {b}
        </p>
      </div>
    );
  }
}

export default App;
