import React, { useState } from 'react';
import Logo from './logo.svg';
import './App.less';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <p>Hello Webpack + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://webpack.js.org/concepts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webpack Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
