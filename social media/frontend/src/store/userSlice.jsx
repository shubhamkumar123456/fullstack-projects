import { createSlice } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('divaToken')
const initialState = {
  login:userToken? true : false,
  token:userToken? userToken : "",
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser:(state, action)=>{

    },

    logoutUser:(state, action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer