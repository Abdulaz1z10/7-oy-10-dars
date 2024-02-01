import { apiSlice } from "../api/apiSlice";

export const headerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getHeaders: builder.query({
            query: ()=>'/nav_text'
        }),
        getImage: builder.query({
            query: ()=>'/image'
        }) 
    })
})

export const {useGetHeadersQuery, useGetImageQuery} = headerApiSlice