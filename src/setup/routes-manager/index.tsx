import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const IsAuthExist = React.lazy(() => import("./IsAuthExist"));

// PAGES
const DashboardPage = React.lazy(() => import("../../Pages/dashboard"));
const PageNotFoundPage = React.lazy(() => import("../../Pages/PageNotFound"));

function RootRouter() {
  return (
    <Routes>
      <Route path="" element={<DashboardPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}

export default RootRouter;
