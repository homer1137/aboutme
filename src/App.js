import React from "react";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./Pages/AboutMe";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import Layout from "./Components/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/photos/:id" element={<Detail />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
