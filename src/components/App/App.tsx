import React from "react";
import ServicesPage from "components/pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
