import baseService from './base_service';

export const eventSliceApi = baseService.injectEndpoints({
  endpoints: builder => ({
    getImages: builder.query<Photo[], void>({
      query: () => ({
        url: `/photos`,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetImagesQuery} = eventSliceApi;
