import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddEmployeePopup from './AddEmployeePopup';
import apiService from '../services/apiService';


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  const handleAddEmployee = (employee) => {
    // Handle saving the employee data to the server or state
    console.log('Adding employee:', employee);
    // You can add your logic here to save the employee data
    setShowAddPopup(false); // Close the popup after saving
    fetchEmployees();
  };

  const handleEditEmployee = (employee) => {
    setEmployeeToEdit(employee);
    setShowAddPopup(true);
  };

  const handleDeleteEmployee = (employee) => {
   apiService.deleteEmployee(employee.id);
   fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const employees = await apiService.getEmployees();
      setEmployees(employees);
    } catch (error) {
      // Handle error
    }
  };



  return (
    <div>
  
       <div className="employee-table">

      <h2>Employees</h2>
      <button className='add-btn' onClick={() => setShowAddPopup(true)}>Add Employee</button>
         {showAddPopup && (
        <AddEmployeePopup
          onClose={() => {
            setShowAddPopup(false);
            setEmployeeToEdit(null);
          }}
          onSave={handleAddEmployee}
          employeeToEdit={employeeToEdit}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => handleEditEmployee(employee)}>Edit</button>
              </td>
              <td>
                <button className='delete-btn' onClick={() => handleDeleteEmployee(employee)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default EmployeeList;
