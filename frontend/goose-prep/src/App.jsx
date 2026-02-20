import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"; 

import LandingPage from "./pages/LandingPage";
import Dashboard from './pages/Home/Dashboard';
import GoosePrep from './pages/GoosePrep/GoosePrep';
import UserProvider from './context/userContext';

const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/goose-prep/:sessionId" element={<GoosePrep />} />
        </Routes>
      </Router>

      <Toaster
      toastOptions={{
        className: "",
        style: {
          fontSize: "13px",
        },
      }}
      />
      <Analytics /> 
    </div>
    </UserProvider>
  )
}

export default App