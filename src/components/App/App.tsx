import React from "react";
import ServicesPage from "components/pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { css, Global } from "@emotion/react";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
