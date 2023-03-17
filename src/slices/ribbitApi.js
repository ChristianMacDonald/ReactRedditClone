import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ribbitApi = createApi({
  reducerPath: 'ribbitApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ribbit-web-api.herokuapp.com/api/' }),
  endpoints: builder => ({
    login: builder.mutation({
      query: user => ({
        url: 'auth/login',
        method: 'POST',
        body: user
      })
    }),
    register: builder.mutation({
      query: user => ({
        url: 'auth/register',
        method: 'POST',
        body: user
      })
    }),
    getTokenOwner: builder.query({
      query: token => ({
        url: 'auth/token-owner',
        headers: {
          token: token
        }
      })
    }),
    getPonds: builder.query({
      query: () => ({
        url: 'ponds'
      })
    }),
    getPondByName: builder.query({
      query: name => ({
        url: `ponds/${name}`
      })
    }),
    getPosts: builder.query({
      query: () => ({
        url: 'posts'
      })
    }),
    getPostsByPondName: builder.query({
      query: name => ({
        url: `ponds/${name}/posts`
      })
    }),
    createPost: builder.mutation({
      query: options => ({
        url: `ponds/${options.pond_name}/posts`,
        method: 'POST',
        body: { title: options.title, content: options.content},
        headers: {
          token: localStorage.getItem('token')
        }
      })
    })
  })
});

export default ribbitApi;

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyGetTokenOwnerQuery,
  useLazyGetPondsQuery,
  useLazyGetPondByNameQuery,
  useLazyGetPostsQuery,
  useLazyGetPostsByPondNameQuery,
  useCreatePostMutation
} = ribbitApi;