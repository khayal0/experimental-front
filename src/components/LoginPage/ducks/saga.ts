import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { PATHS } from 'routes/paths';
import { ELocalStorage, EUserRole, ICredentials, IToken } from 'models';
import { EAuth } from './types';

interface ILoginAction {
    type: EAuth;
    payload: ICredentials;
}

function* loginUser(action: ILoginAction) {
    const url = `http://${process.env.REACT_APP_ORIGIN}:5111${PATHS.LOGIN}`;
    const config = { headers: {} };
    const role = localStorage.getItem(ELocalStorage.ROLE);
    const continueLogin = role === EUserRole.ADMIN ? PATHS.ADMINPAGE : PATHS.SENDDATA;
    try {
        const json: IToken = yield axios.post(url, action.payload, config);
        localStorage.setItem('token', json?.token);
        yield put({ type: EAuth.AUTHSUCCEED });
        yield put(push(continueLogin));
    } catch (error) {
        yield put({ type: EAuth.AUTHFAILED, payload: error.message });
    }
}
export function* loginActionWatcher() {
    yield takeLatest(EAuth.AUTHREQUESTED, loginUser);
}
