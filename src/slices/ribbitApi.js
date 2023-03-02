import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ribbitApi = createApi({
  reducerPath: 'ribbitApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
  endpoints: builder => ({
    login: builder.mutation({
      query: user => ({
        url: 'auth/login',
        method: 'POST',
        body: user
      })
    })
  })
});

export default ribbitApi;

export const { useLoginMutation } = ribbitApi;