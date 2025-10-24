import { configureStore } from '@reduxjs/toolkit';

import { animeApiMiddleware, animeApiReducer, animeApiReducerPath } from './slices/animeApi';
import { animeSearchReducer } from './slices/animeSearch';

export const store = configureStore({
  reducer: {
    [animeApiReducerPath]: animeApiReducer,
    animeSearch: animeSearchReducer,
  },
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApiMiddleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
