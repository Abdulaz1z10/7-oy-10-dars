import { apiSlice } from "../api/apiSlice";

export const mashroomApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getMashroom: builder.query({
            query: ()=>'/mashroom'
        })
    })
})
export const {useGetMashroomQuery} = mashroomApiSlice