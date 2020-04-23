import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const nameReducer = process.env.REACT_APP_PERSIST_REDUCER || 'mentores-reducer';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: nameReducer,
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
  return persistedReducer;
};
