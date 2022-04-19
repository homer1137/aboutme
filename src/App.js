import React from "react";
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./Pages/AboutMe";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import Layout from "./Components/Layout";
import Redux2TestPage from "./Pages/Redux2TestPage";
import Redux1TestPage from "./Pages/Redux1TestPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/photos/:id" element={<Detail />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/redux1testpage" element={<Redux1TestPage />} />
          <Route path="/redux2testpage" element={<Redux2TestPage />} />
        </Route>
      </Routes>
    </>
  );
}
