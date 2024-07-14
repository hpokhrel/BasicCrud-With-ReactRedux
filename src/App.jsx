import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetAll from "./components/GetAll";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAll />} />
          <Route path="/create" element={<Create />} />
          <Route path={`/update/:id`} element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
