import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../component/Home";
import { TopRatedPage } from "../component/TopRatedPage";
import { CastDetail } from "../component/CastDetail";
import { UpcomingMoviesPage } from "../component/UpcomingMoviesPage";
import { MainLayout } from "../layout/MainLayout";
import { Detail } from "../component/Detail";
import { Latest } from "../component/Latest";
import { Popular } from "../component/Popular";
import { Trending } from "../component/Trending";
export const MoviesRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/castdetail/:id" element={<CastDetail />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending/:day" element={<Trending />} />
      </Routes>
    </MainLayout>
  );
};
//
