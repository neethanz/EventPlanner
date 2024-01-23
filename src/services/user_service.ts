import baseService from './base_service';

export const userApiSlice = baseService.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetUsersQuery} = userApiSlice;
