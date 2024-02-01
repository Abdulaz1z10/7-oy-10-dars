import { apiSlice } from "../api/apiSlice";

export const discoverApiSlice = apiSlice.injectEndpoints({
  endpoints:  builder =>({
    getDiscover: builder.query({
        query: ()=>'/discover'
    })
  })
})
export const {useGetDiscoverQuery} = discoverApiSlice