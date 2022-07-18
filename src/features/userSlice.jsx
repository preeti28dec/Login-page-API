import { createSlice } from '@reduxjs/toolkit'

const initialState = {
authenticated:false,
lastLogin:'',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      onLogin(state){
        return {
          ...state,
          authenticated:true,
          lastLogin:new Date()
        }
      },
      onLogout(state){
        return {
          ...state,
          authenticated:false,
        }
      },
      onSingUp(state){
        return{
          ...state,
          authenticated:false,
        }
      }
  }
})
export const { onLogin,onLogout,onSingUp} = userSlice.actions


export default userSlice.reducer;




