import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeA from "./pages/HomeA";
import Signup from "./pages/Signup";
import "./App.css";
import Login from "./pages/Login";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import CoursesPage from "./pages/CoursePage";
import AdvancedStudentLoanDashboard from './pages/AdvancedStudentLoanDashboard';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/h" element={<HomeA/>} />
        <Route path="/s" element={<Signup/>} />
        <Route path="/l" element={<Login/>} />
        <Route path="/course/:id" element={<CourseDetailsPage/>} /> 
        <Route path="/c" element={<CoursesPage/>} />
        <Route path="/A" element={<AdvancedStudentLoanDashboard/>} />
      </Routes>
    </div>
  );
};

export default App;
