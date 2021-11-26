import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/user/userSlice';
import alertReducer from "../features/alert/alertSlice";
import slideReducer from "../features/slides/slidesSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: authReducer,
    alert: alertReducer,
    slides: slideReducer
  },
});