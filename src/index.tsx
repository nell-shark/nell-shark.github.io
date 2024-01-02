import { App } from "@/App";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import "@/i18n";
import "@/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
