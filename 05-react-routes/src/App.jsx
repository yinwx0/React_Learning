import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import AppRoutes from "./routes";

import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
