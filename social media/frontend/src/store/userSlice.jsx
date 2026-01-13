import { createSlice } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('divaToken')
const initialState = {
  login:userToken? true : false,
  token:userToken? userToken : "",
  userDetails:{}
}


export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser:(state, action)=>{
        localStorage.setItem('divaToken',action.payload)
        state.login = true
        state.token = action.payload
    },

    updateUser:(state,action)=>{
      state.userDetails = action.payload
    },

    logoutUser:(state, action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, updateUser, logoutUser } = userSlice.actions

export default userSlice.reducer