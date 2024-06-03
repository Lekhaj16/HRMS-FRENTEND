// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee-management/view" element={<div>View Employees</div>} />
        <Route path="/employee-management/add" element={<div>Add Employee</div>} />
        <Route path="/performance-management/reviews" element={<div>Reviews</div>} />
        <Route path="/performance-management/goals" element={<div>Goals</div>} />
        <Route path="/training-development/courses" element={<div>Courses</div>} />
        <Route path="/training-development/schedule" element={<div>Schedule</div>} />
        <Route path="/payroll-benefits/salary" element={<div>Salary</div>} />
        <Route path="/payroll-benefits/benefits" element={<div>Benefits</div>} />
        <Route path="/compliance-docs/policies" element={<div>Policies</div>} />
        <Route path="/compliance-docs/forms" element={<div>Forms</div>} />
        <Route path="/reports" element={<div>Reports</div>} />
      </Routes>
    </Router>
  );
}

export default App;
