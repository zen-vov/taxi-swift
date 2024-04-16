import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/auth/ui/Login";
import Dashboard from "./pages/Dashboard/ui/Dashboard";
import ProfilePage from "./pages/profile/ui/ProfilePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Login />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/profile" element={<ProfilePage />} />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
