import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider, addLocaleData } from 'react-intl';
import messages_en from './respresso/localization/respresso.strings-en';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import flatten from 'flat';

addLocaleData([...locale_en, ...locale_de]);

const messages = {
  en: messages_en
};
let language = navigator.language.split(/[-_]/)[0];
language = messages.hasOwnProperty(language) ? language : 'en';

ReactDOM.render(
  <IntlProvider locale={language} messages={flatten(messages[language])}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
