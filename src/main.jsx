import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </ErrorBoundary>
      <Analytics />
      <SpeedInsights />
    </Router>
  </StrictMode>
);
