import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Provider } from 'react-redux';
import store from './Redux/Store';

import { loadLiterals } from "./Redux/literals";
import loadLang from "./i18n";

const lang = loadLang();
store.dispatch(loadLiterals(lang))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)