import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/index.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { App } from "@/App";
import "@/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
