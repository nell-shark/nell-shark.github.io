import ReactDOM from "react-dom/client";
import "@/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "@/App";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
