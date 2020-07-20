import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from "react-intl";
import messages_en from './respresso/localization/respresso.strings-en';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en" messages={messages_en}>
    <App/>
  </IntlProvider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
