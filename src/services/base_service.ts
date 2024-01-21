import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, WebApi, extraOptions) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
  });
  return rawBaseQuery(args, WebApi, extraOptions);
};

// initialize an empty api service that we'll inject endpoints into later as needed
const baseService = createApi({
  reducerPath: 'baseService',
  baseQuery: dynamicBaseQuery,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  endpoints: builder => ({}),
  keepUnusedDataFor: 0,
});

export default baseService;
