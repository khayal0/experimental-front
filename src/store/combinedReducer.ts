import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from 'components/UserTable/ducks/reducer';
import { History } from 'history';

const combinedReducer = combineReducers({
    users: userReducer,
});

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
    });

export default createRootReducer;

export interface IRootStateCombinedReducer extends ReturnType<typeof combinedReducer> {} // it is imported in models
