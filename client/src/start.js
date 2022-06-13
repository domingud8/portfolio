import { createRoot } from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";

const rootElement = document.querySelector("main");
const root = createRoot(rootElement);

root.render(<App />);
