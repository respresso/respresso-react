import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData, IntlProvider} from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import flatten from 'flat';
import _ from 'lodash'
import {RespressoLiveSync} from 'respresso-live-sync';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import messages_en from './respresso/localization/respresso.strings-en';

addLocaleData([...locale_en, ...locale_de]);

const language = 'en';
const enableRespressoLiveSync = false;

let respressoLiveSyncClient = null;
if (enableRespressoLiveSync) {
	respressoLiveSyncClient  = new RespressoLiveSync({
		projectToken: 'ec9a1576-7fc9-416e-9f7b-414ea2123cde', //keep in sync with respresso.json
		version: '1.0.0', //keep in sync with respresso.json
		appName: 'My React App: ' + navigator.vendor + ' (' + navigator.platform + ')'
	});

	respressoLiveSyncClient.enableDocumentSelectHandler();
}

class Top extends Component {

	constructor(props, context) {
		super(props, context);

		let msg = {
			en: flatten(messages_en)
		};

		this.state = {messages: _.cloneDeep(msg)};

		if (enableRespressoLiveSync) {
			respressoLiveSyncClient.onValueChangedListener = (values) => {
				Object.assign(msg.en, values);

				this.setState({
					messages: _.cloneDeep(msg)
				});
			}
		}
	}

	render() {
		return (
			<IntlProvider locale={language} messages={this.state.messages[language]}>
				<App/>
			</IntlProvider>
		);
	}
}

ReactDOM.render(
	<Top/>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
