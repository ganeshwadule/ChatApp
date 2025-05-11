import { useEffect, useRef, useState } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Protector from "./components/Protector";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <Protector>
              <Dashboard />
            </Protector>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
