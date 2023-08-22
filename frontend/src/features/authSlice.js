import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:'authSlice',
    initialState:{user:null, token:null},
    reducers:{
        setCredentials:(state, action)=>{

            const {user, loginToken} = action.payload;
            state.token = loginToken;
            state.user = user;
        },
        logOut:(state, action)=>{
            state.user = null;
            state.token = null;
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.authSlice.user;
export const selectCurrentToken = (state) => state.authSlice.token;