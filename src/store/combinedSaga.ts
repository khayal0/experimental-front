import { all } from 'redux-saga/effects';

import { usersActionsWatcher } from 'components/UserTable/ducks/saga';
import { loginActionWatcher } from 'components/LoginPage/ducks/saga';

export default function* rootSaga() {
    yield all([usersActionsWatcher(), loginActionWatcher()]);
}
