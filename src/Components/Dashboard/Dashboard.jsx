// src/components/Dashboard/Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './dashboard.css';

const data = [
  { name: 'HR', employees: 10 },
  { name: 'Engineering', employees: 50 },
  { name: 'Sales', employees: 20 },
  { name: 'Marketing', employees: 15 },
  { name: 'Support', employees: 25 },
];

const Dashboard = () => {
  const [employeeManagementOpen, setEmployeeManagementOpen] = useState(false);
  const [performanceManagementOpen, setPerformanceManagementOpen] = useState(false);
  const [trainingDevelopmentOpen, setTrainingDevelopmentOpen] = useState(false);
  const [payrollBenefitsOpen, setPayrollBenefitsOpen] = useState(false);
  const [complianceDocsOpen, setComplianceDocsOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="dashboard">
        <div className="sidebar">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/"><i className="fas fa-tachometer-alt"></i> Dashboard</Link></li>
            <li>
              <button onClick={() => setEmployeeManagementOpen(!employeeManagementOpen)}>
                <i className="fas fa-users"></i> Employee Management
              </button>
              {employeeManagementOpen && (
                <ul className="dropdown">
                  <li><Link to="/employee-management/view">View Employees</Link></li>
                  <li><Link to="/employee-management/add">Add Employee</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => setPerformanceManagementOpen(!performanceManagementOpen)}>
                <i className="fas fa-chart-line"></i> Performance Management
              </button>
              {performanceManagementOpen && (
                <ul className="dropdown">
                  <li><Link to="/performance-management/reviews">Reviews</Link></li>
                  <li><Link to="/performance-management/goals">Goals</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => setTrainingDevelopmentOpen(!trainingDevelopmentOpen)}>
                <i className="fas fa-book"></i> Training & Development
              </button>
              {trainingDevelopmentOpen && (
                <ul className="dropdown">
                  <li><Link to="/training-development/courses">Courses</Link></li>
                  <li><Link to="/training-development/schedule">Schedule</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => setPayrollBenefitsOpen(!payrollBenefitsOpen)}>
                <i className="fas fa-dollar-sign"></i> Payroll & Benefits
              </button>
              {payrollBenefitsOpen && (
                <ul className="dropdown">
                  <li><Link to="/payroll-benefits/salary">Salary</Link></li>
                  <li><Link to="/payroll-benefits/benefits">Benefits</Link></li>
                </ul>
              )}
            </li>
            <li>
              <button onClick={() => setComplianceDocsOpen(!complianceDocsOpen)}>
                <i className="fas fa-file-alt"></i> Compliance Documents
              </button>
              {complianceDocsOpen && (
                <ul className="dropdown">
                  <li><Link to="/compliance-docs/policies">Policies</Link></li>
                  <li><Link to="/compliance-docs/forms">Forms</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/reports"><i className="fas fa-chart-pie"></i> Reports</Link></li>
          </ul>
        </div>
        <div className="content">
          <h1>HRMS Dashboard</h1>
          <div className="stats">
            <div className="stat">
              <h3>Employees</h3>
              <p>120</p>
            </div>
            <div className="stat">
              <h3>Departments</h3>
              <p>8</p>
            </div>
            <div className="stat">
              <h3>New Hires</h3>
              <p>5</p>
            </div>
            <div className="stat">
              <h3>Open Positions</h3>
              <p>3</p>
            </div>
          </div>
          <div className="recent-activities">
            <h2>Recent Activities</h2>
            <ul>
              <li>Madhu was hired as a Software Engineer</li>
              <li>Vamsi completed the React training</li>
              <li>Monthly payroll processed</li>
              <li>Annual compliance report submitted</li>
            </ul>
          </div>
          <div className="chart">
            <h2>Employee Distribution by Department</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="employees" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
