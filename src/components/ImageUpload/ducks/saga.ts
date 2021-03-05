import { put, takeLatest } from 'redux-saga/effects';
import { EUpload } from './types';
import axios from 'axios';

import { IUploadStarted } from 'models';

function* uploadImage(action: IUploadStarted) {
    const url = 'http://127.0.0.1:5000/upload';
    const config = { headers: {} };
    console.log('== action in uploadImage Saga ==>', action);
    try {
        const json = yield axios.post(url, action.payload, config);
        console.log('== uploadedData  axios response json in saga ==>', json);
        // if (json.status === 201) {
        //     try {
        //         const productUrl = 'http://127.0.0.1:5000/products';
        //         yield axios.post(productUrl, action.payload.info, config);
        //     } catch (error) {
        //         alert(error.message);
        //     }
        // } else {
        //     alert(json.status);
        // }
    } catch (error) {
        alert(error.message);
    }

    // yield put({ type: EUpload.UPLOADFINISHED, payload: json.data });
}
export function* uploadActionWatcher() {
    yield takeLatest(EUpload.UPLOADSTARTED, uploadImage);
}

// const bodyFormData = new FormData();
// bodyFormData.append('image', imageFile);
