import { apiSlice } from "../api/apiSlice";

export const footerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder=>({
        getFooter: builder.query({
            query: ()=>'/footer'
        })
    })
})
export const {useGetFooterQuery} = footerApiSlice