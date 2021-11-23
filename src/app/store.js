import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/user/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: authReducer,
  },
});
