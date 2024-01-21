import baseService from './base_service';

export const eventSliceApi = baseService.injectEndpoints({
  endpoints: builder => ({
    getAllTasks: builder.query({
      query: () => ({
        url: `/tasks`,
        method: 'GET',
      }),
      transformResponse: (_response: any) => _response,
    }),
  }),
});

export const {useGetAllTasksQuery} = eventSliceApi;
