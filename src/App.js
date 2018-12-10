import React, { Component } from 'react';
import avatar from './respresso/image/profile_avatar.svg';
import './App.scss';
import { FormattedHTMLMessage } from 'react-intl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={avatar} className="App-logo" alt="logo" />
          <p>
            <FormattedHTMLMessage id="profile.firstname" defaultMessage="profile.firstname not found" />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
