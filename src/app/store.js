import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/user/userSlice';
import alertReducer from "../features/alert/alertSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: authReducer,
    alert: alertReducer
  },
});