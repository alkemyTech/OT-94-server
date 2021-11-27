import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  id: '',
  token: '',
  authenticated: false,
  role: '',
};
export const userSlice = createSlice({
  name: 'authentication',
  initialState: { ...initialState },
  reducers: {
    login: (state, action) => {
      state = {
        ...state,
        user: action.payload.user,
        id: action.payload.id,
        token: action.payload.token,
        authenticated: true,
        role: action.payload.role,
      };
      return state;
    },
    register: (state, action) => {
      state = {
        ...state,
        user: action.payload.user,
        id: action.payload.id,
        token: action.payload.token,
        authenticated: false,
      };
      return state;
    },
    logout: (state) => {
      state = { ...initialState };
      return state;
    },
  },
});

export const { login, register, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
