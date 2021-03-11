import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { PATHS } from 'routes/paths';
import { ICredentials, IToken } from 'models';
import { EAuth } from './types';
interface ILoginAction {
    type: EAuth;
    payload: ICredentials;
}

function* loginUser(action: ILoginAction) {
    const url = `http://${process.env.REACT_APP_ORIGIN}:5111${PATHS.LOGIN}`;
    const config = { headers: {} };
    console.log('== action login saga ==>', action);
    try {
        const json: IToken = yield axios.post(url, action.payload, config);
        localStorage.setItem('token', json?.token);
    } catch (error) {
        console.log('== Error in login user ==>', error.message);
        yield put({ type: EAuth.AUTHFAILED, payload: error.message });
    }
    yield put({ type: EAuth.AUTHSUCCEED });
}
export function* loginActionWatcher() {
    yield takeLatest(EAuth.AUTHREQUESTED, loginUser);
}
