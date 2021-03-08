import { all } from 'redux-saga/effects';

import { usersActionsWatcher } from 'components/UserTable/ducks/saga';
import { uploadActionWatcher } from 'components/ImageUpload/ducks/saga';

export default function* rootSaga() {
    yield all([usersActionsWatcher(), uploadActionWatcher()]);
}
