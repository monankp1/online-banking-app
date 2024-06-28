import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import userReducer from './userSlice';
import featureReducer from './featuresSlice';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    user: userReducer,
    feature: featureReducer
});


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
