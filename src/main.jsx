import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage.jsx"));
const QuizPage = lazy(() => import("./Pages/QuizPage.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
