import { configureStore } from '@reduxjs/toolkit';
import { valorantApi } from './api';

export const store = configureStore({
  reducer: {
    [valorantApi.reducerPath]: valorantApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(valorantApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;