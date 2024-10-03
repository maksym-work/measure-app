import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import assessmentReducer from '../features/assessmentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    assessment: assessmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
