import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    topRated: builder.query({
      query: () => ({
        url: "/top_rated?language=en-US&page=1",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    upcomingMovies: builder.query({
      query: () => ({
        url: "/upcoming?language=en-US&page=1",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    detailMovie: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    cast: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    keywords: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}/keywords`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    similarMovies: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    castDetail: builder.query({
      query: (id) => ({
        url: `https://api.themoviedb.org/3/person/${id}?language=en-US`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    popularMovies: builder.query({
      query: () => ({
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
      }),
    }),
    trendingMovies: builder.query({
      query: (data) => ({
        url: `https://api.themoviedb.org/3/trending/movie/${data}?language=en-US`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ZmM2Zjk4ZjMyYWMzMTE1OGVmYTBjY2NkZmU0OCIsInN1YiI6IjY1MDMzNjM3NmEyMjI3MDBlMGYzOTM4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h3LXi8KGc0_9eFgVbDbpdB82BfxQ6S7mX_KB_muAvbc",
        },
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
