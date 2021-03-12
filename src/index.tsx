import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import whyDidYouRender from 'shared/utils/whyDidYouRender';

import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'store';

import './index.scss';
whyDidYouRender();

const store = configureStore;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
serviceWorker.register();
