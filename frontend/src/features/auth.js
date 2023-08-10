import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: `account/Register`,
                method: 'POST',
                body: body,
            })
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: `account/Login`,
                method: 'POST',
                body: body,
            })
        }),
        logoutUser: builder.query({
            query: () => `account/Logout`,
        }),
    })
})


export const { 
    useLogoutUserQuery, 
    useRegisterUserMutation, 
    useLoginUserMutation
} = authApi
