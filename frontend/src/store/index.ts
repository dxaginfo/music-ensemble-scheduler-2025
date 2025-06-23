import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import groupReducer from './slices/groupSlice';
import eventReducer from './slices/eventSlice';
import venueReducer from './slices/venueSlice';
import repertoireReducer from './slices/repertoireSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    group: groupReducer,
    event: eventReducer,
    venue: venueReducer,
    repertoire: repertoireReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
