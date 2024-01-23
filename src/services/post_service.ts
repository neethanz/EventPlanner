import baseService from './base_service';

export const postApiSlice = baseService.injectEndpoints({
  endpoints: builder => ({
    getPost: builder.query<Post[], void>({
      query: () => ({
        url: `/posts`,
        method: 'GET',
      }),
    }),

    getPostComments: builder.query<Comment[], {postId: string}>({
      query: ({postId}) => ({
        url: `/comments?postId=${postId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetPostQuery, useGetPostCommentsQuery} = postApiSlice;
