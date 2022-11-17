import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
