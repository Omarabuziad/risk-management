import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CalculationPage from "./pages/CalculationPage/CalculationPage";
import InformationPage from "./pages/InformationPage/InformationPage";



function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<HomePage />}
          sitemapIndex={true}
          priority={1}
        />
        <Route
          path="/calculation"
          element={<CalculationPage />}
          sitemapIndex={true}
          priority={1}
        />
        <Route
          path="/information"
          element={<InformationPage />}
          sitemapIndex={true}
          priority={1}
        />
      </Routes>
    </div>
  );
}

export default App;
