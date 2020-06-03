import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n/initI18n";
import App from "./App";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Container fluid="xl" className="mb-3">
      <App />
    </Container>
  </I18nextProvider>,
  document.getElementById("react"),
);
