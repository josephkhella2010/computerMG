import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "../homePage/HomeSection";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </Router>
  );
}
