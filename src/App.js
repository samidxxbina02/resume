import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayouts";
  import "./App.css";
import Contacts from "./components/Contacts";
import About from "./components/About/About";
import MainPage from "./components/MainPage";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* <Route path="*" element={<div>Not Found</div>} /> */}
      </Routes>
    </React.Fragment>
  );
}
