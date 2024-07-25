import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../interfaces/interfaces';

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v2/rest/' }),
  endpoints: (builder) => ({
    getPlanetById: builder.query<ApiResponse, string>({
      query: (uid) => `astronomicalObject?uid=${uid}`,
    }),
    searchPlanet: builder.query<
      ApiResponse,
      { searchItem: string; currentPage: number }
    >({
      query: ({ searchItem, currentPage }) => ({
        url: `astronomicalObject/search?pageSize=10&pageNumber=${currentPage - 1}`,
        method: 'POST',
        body: new URLSearchParams({
          name: searchItem,
        }),
      }),
    }),
  }),
});

export const { useGetPlanetByIdQuery, useSearchPlanetQuery } = planetsApi;
