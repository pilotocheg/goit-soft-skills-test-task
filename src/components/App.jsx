import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import Navigation from "./Navigation";
import Loader from "./common/Loader";
import css from "./App.module.css";
import { useErrorNotification } from "../hooks/useErrorNotification";

const HomePage = lazy(() => import("../pages/HomePage"));
const CamperDetailsPage = lazy(() => import("../pages/CamperDetailsPage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export default function App() {
  useErrorNotification();

  return (
    <div className={css.app}>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" />
    </div>
  );
}
