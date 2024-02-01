import { apiSlice } from "../api/apiSlice";

export const collectionApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getCollection: builder.query({
            query: ()=>'/collection'
        })
    })
})
export const {useGetCollectionQuery} = collectionApiSlice