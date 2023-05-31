import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";
import './styles.css';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" />
        <Route path="/employees/:id/edit" />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
   
  );
}

export default App;
