import { apiSlice } from "../api/apiSlice";

export const worksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getWorks: builder.query({
            query: ()=>'/works'
        })
    })
})

export const {useGetWorksQuery} = worksApiSlice