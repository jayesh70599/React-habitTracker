import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WeekView from "./WeekView";

const App = () => {
  
  
  return (
    <>
    <Routes>
      <Route path="/React-habitTracker" element={<Home/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
    </>
  );
};

export default App;
