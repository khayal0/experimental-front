import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from 'store/combinedReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import combinedSaga from './combinedSaga';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
let middlewares = applyMiddleware(sagaMiddleware, routerMiddleware(history));

// store with connected-react-router and simple store
// const store = createStore(combinedReducer, composeWithDevTools(compose(middlewares)));
const store = createStore(createRootReducer(history), composeWithDevTools(compose(middlewares)));

sagaMiddleware.run(combinedSaga);

export default store;
