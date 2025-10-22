import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoResizer from "./pages/PhotoResizer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo-resizer" element={<PhotoResizer />} />
      </Routes>
    </Router>
  );
}

export default App;
