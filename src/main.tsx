import { createRoot } from "react-dom/client";
import React from "react";
import "./styles.css";
import { TodoApp } from "./components/TodoApp";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>
);
