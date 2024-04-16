import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./font.css";
import App from "./app/App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard/ui/Dashboard";
import ProfilePage from "./pages/profile/ui/ProfilePage";
import Choose from "./pages/Choose/ui/Choose";
import PassengerReg from "./pages/Passengerreg/ui/Passengerreg";
import DriveReg from "./pages/driverreg/ui/Drivereg";
import LoginDR from "./pages/auth/loginDrive/ui/LoginDr";
import LoginPS from "./pages/auth/LoginPass/ui/LoginPs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Choose />} />
          <Route path="/app/loginDrive" element={<LoginDR />} />
          <Route path="/app/loginPass" element={<LoginPS />} />
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
