import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font.css";
import App from "./app/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth/ui/AuthPage";
import Dashboard from "./pages/Dashboard/ui/Dashboard";
import ProfilePage from "./pages/profile/ui/ProfilePage";
import PassengerReg from "./pages/Passengerreg/ui/Passengerreg";
import DriveReg from "./pages/driverreg/ui/Drivereg";
import ChoosePage from "./pages/choose/ui/ChoosePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<ChoosePage />} />
          <Route path="/app/auth" element={<AuthPage />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/profile" element={<ProfilePage />} />
          <Route path="/app/driverreg" element={<DriveReg />} />
          <Route path="/app/passengerreg" element={<PassengerReg />} />
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
