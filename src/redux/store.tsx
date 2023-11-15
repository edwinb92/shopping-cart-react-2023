import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, REGISTER, REHYDRATE, PURGE } from 'redux-persist';
import { FLUSH, PERSIST } from 'redux-persist/lib/constants';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage,
};

const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducer),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE, REGISTER],
			},
		})
});

const persistor = persistStore(store);
export { store, persistor };
