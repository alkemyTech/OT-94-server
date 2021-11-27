import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/user/userSlice';
import alertReducer from "../features/alert/alertSlice";
import slideReducer from "../features/slides/slidesSlice";
import activityReducer from "../features/activity/activitySlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: authReducer,
    alert: alertReducer,
    slides: slideReducer,
    listActivity: activityReducer
  },
});