import React from "react";
import ServicesPage from "components/pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { css, Global } from "@emotion/react";
import ServicePage from "components/pages/ServicePage";
import Page from "components/Page";

function App() {
  const globalStyles = css`
    body: {
      height: 100%;
    }
  `;

  return (
    <Router>
      <Page>
        <Global styles={globalStyles} />
        <Routes>
          <Route path="/" element={<ServicesPage />} />
          <Route path="/service/:serviceId" element={<ServicePage />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
