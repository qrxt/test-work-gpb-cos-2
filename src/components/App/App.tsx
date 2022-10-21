import React from "react";
import ServicesPage from "components/pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { css, Global } from "@emotion/react";
import ServicePage from "components/pages/ServicePage";

function App() {
  const globalStyles = css`
    body: {
      height: 100%;
      background: red;
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
