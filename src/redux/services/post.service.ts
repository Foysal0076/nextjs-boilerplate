import { api } from '@/redux/services/api'

import type { Post } from './types'

// Define a service using a base URL and expected endpoints
const pokemonService = api.injectEndpoints({
  endpoints: (builder) => ({
    getPostById: builder.query<Post, number>({
      query: (id) => ({
        method: 'GET',
        url: `/posts/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
    getPosts: builder.query<Post[], void>({
      query: () => ({
        method: 'GET',
        url: '/posts',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    addPost: builder.mutation<Post, Partial<Post>>({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        data,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    updatePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        data: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Post', id }],
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostByIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useLazyGetPostByIdQuery,
} = pokemonService
