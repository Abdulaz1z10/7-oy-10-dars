import { apiSlice } from "../api/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getCategories: builder.query({
            query: ()=>'/categories'
        })
    })
})
export const {useGetCategoriesQuery} = categoriesApiSlice