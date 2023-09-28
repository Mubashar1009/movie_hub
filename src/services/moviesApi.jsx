import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const method = "GET";
 const header = 
  {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
  
 }
export const MoviesApi = createApi({
  // tagTypes: ["popularMovies", "topRated"],
  reducerPath: "MoviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie",
  }),
  endpoints: (builder) => ({
    releasedMovies: builder.query({
      query: () => ({
        url: "/now_playing?language=en-US&page=1",
        method: method,
        headers:header
      }),
    }),
    topRated: builder.query({
      query: () => ({
        url: "/top_rated?language=en-US&page=1",
        method: method,
        headers:header
      }),
    }),
    upcomingMovies: builder.query({
      query: () => ({
        url: "/upcoming?language=en-US&page=1",
        method: method,
        headers:header
      }),
    }),
    detailMovie: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        method: method,
        headers:header
      }),
    }),
    cast: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        method: method,
        headers:header
      }),
    }),
    keywords: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
        method: method,
        headers:header
      }),
    }),
    similarMovies: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        method: method,
        headers:header
      }),
    }),
    castDetail: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/person/${id}?language=en-US`,
        method: method,
        headers:header
      }),
    }),
    popularMovies: builder.query({
      query: () => ({
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        method: method,
        headers:header
      }),
    }),
    trendingMovies: builder.query({
      query: (data) => ({
        url: `https://api.themoviedb.org/3/trending/movie/${data}?language=en-US`,
        method: method,
        headers:header
      }),
    }),
  }),
});
export const {
  useReleasedMoviesQuery,
  useTopRatedQuery,
  useUpcomingMoviesQuery,
  useDetailMovieQuery,
  useCastQuery,
  useKeywordsQuery,
  useSimilarMoviesQuery,
  useCastDetailQuery,
  usePopularMoviesQuery,
  useTrendingMoviesQuery,
} = MoviesApi;
//
