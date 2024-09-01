import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { ToDoProvider } from "./context/toDoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>
);
