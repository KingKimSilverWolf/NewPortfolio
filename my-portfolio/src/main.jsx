import * as Sentry from "@sentry/react";
import { browserTracingIntegration } from "@sentry/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

Sentry.init({
  dsn: "https://c63e22bc30b8def3883a9976adfbebd8@o4508121364758528.ingest.us.sentry.io/4509158171017216",
  integrations: [browserTracingIntegration()],
  tracesSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);