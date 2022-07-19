import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authenticated: false,
  lastLogin: '',
  email:'',
  password:''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLogin(state) {
      return {
        ...state,
        authenticated: true,
        lastLogin: new Date()
      }
    },
    onLogout(state) {
      return {
        ...state,
        authenticated: false,
      }
    },
    onSignup(state) {
      return {
        ...state,
        authenticated: false,
      }
    }
  }
})
export const { onLogin, onLogout, onSignup,store,check } = userSlice.actions


export default userSlice.reducer;




