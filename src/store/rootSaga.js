import { all } from 'redux-saga/effects';
import { watchFetchFeatures } from './featureSagas';
import { watchLogin, watchLogout, watchFetchUsers, watchUpdateBalance, watchTransferMoney } from './userSagas';

export default function* rootSaga() {
    yield all([
        watchFetchFeatures(),
        watchLogin(),
        watchLogout(),
        watchFetchUsers(),
        watchUpdateBalance(),
        watchTransferMoney()
    ]);
}
