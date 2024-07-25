import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../interfaces/interfaces';

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v2/rest/' }),
  endpoints: (builder) => ({
    getPlanetById: builder.query<ApiResponse, string>({
      query: (uid) => `astronomicalObject?uid=${uid}`,
    }),
    searchPlanet: builder.mutation({
      query: (body) => ({
        url: '/astronomicalObject/search?pageSize=10&pageNumber=1',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetPlanetByIdQuery, useSearchPlanetMutation } = planetsApi;
