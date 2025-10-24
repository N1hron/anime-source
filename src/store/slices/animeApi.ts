import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { createURLSearchParams } from '@/utils';
import type {
  GetAnimeListQueryParameters,
  GetAnimeListResult,
  GetAnimeRankingQueryParameters,
  GetAnimeRankingResult,
} from '@/types';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/anime/v2',
    headers: {
      'X-MAL-CLIENT-ID': import.meta.env.VITE_X_MAL_CLIENT_ID,
    },
  }),
  endpoints: (build) => ({
    getAnimeList: build.query<GetAnimeListResult, GetAnimeListQueryParameters>({
      query: (params) => `anime?${createURLSearchParams(params)}`,
    }),
    getAnimeRanking: build.query<GetAnimeRankingResult, GetAnimeRankingQueryParameters>({
      query: (params) => `anime/ranking?${createURLSearchParams(params)}`,
      keepUnusedDataFor: 300,
    }),
  }),
});

export const animeApiReducer = animeApi.reducer;
export const animeApiReducerPath = animeApi.reducerPath;
export const animeApiMiddleware = animeApi.middleware;
export const { useGetAnimeListQuery, useGetAnimeRankingQuery } = animeApi;
