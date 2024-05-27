import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['customer', 'userProfile']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
    sagaMiddleware
  ]
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
