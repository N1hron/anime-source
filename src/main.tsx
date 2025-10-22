import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/components/app/App";

import "./index.scss";

const rootElement = document.querySelector("#root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
