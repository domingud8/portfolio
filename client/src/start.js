import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.querySelector("main");
const root = createRoot(rootElement);

root.render(<App />);
