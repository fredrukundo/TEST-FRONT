import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './reducers/taskReducer';
import rootSaga from './sagas/taskSagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

