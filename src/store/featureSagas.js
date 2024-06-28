import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { BACKEND_ENDPOINT } from '../api/api';
import { setFeatures } from "./featuresSlice";


function* fetchFeatures() {
    try {
        const response = yield call(axios.get, `${BACKEND_ENDPOINT}/features`);
        yield put(setFeatures(response.data));
    } catch (err) {
        console.error(err);
    }
};


//watcher saga

export function* watchFetchFeatures() {
    yield takeEvery("features_fetchFeatures", fetchFeatures);
}
