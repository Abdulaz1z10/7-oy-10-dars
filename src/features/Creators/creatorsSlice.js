import { apiSlice } from "../api/apiSlice";

export const creatorsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getCreators: builder.query({
            query: ()=>'/creators'
        })
    })
})

export const {useGetCreatorsQuery} = creatorsApiSlice