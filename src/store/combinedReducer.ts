import { combineReducers } from 'redux';
import userReducer from 'components/UserTable/ducks/reducer';

const combinedReducer = combineReducers({
    users: userReducer,
});

export default combinedReducer;

export interface IRootStateCombinedReducer extends ReturnType<typeof combinedReducer> {} // it is imported in models
