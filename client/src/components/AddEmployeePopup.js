import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function AddEmployeePopup({ onClose, onSave, employeeToEdit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (employeeToEdit) {
      setFirstName(employeeToEdit.firstName);
      setLastName(employeeToEdit.lastName);
      setAge(employeeToEdit.age);
    }
  }, [employeeToEdit]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  {/*
  const handleSave = () => {
    onSave({ firstName, lastName, age });
    setFirstName('');
    setLastName('');
    setAge('');
  };
  */}

  const handleSave = async () => {
    const employeeData = { firstName, lastName, age };
    if (employeeToEdit) {
      employeeData.id = employeeToEdit.id;
      await apiService.updateEmployee(employeeData);
    } else {
        console.log("EployeeData Sent from Popup:");
        console.log(employeeData);
      await apiService.createEmployee(employeeData);
    }
    onSave();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{employeeToEdit ? 'Edit Employee' : 'Add Employee'}</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div className="buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" onClick={handleSave}>
              {employeeToEdit ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployeePopup;
