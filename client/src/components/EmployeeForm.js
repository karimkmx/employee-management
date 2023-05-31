import React from 'react';

const EmployeeForm = () => {
  return (
    <div>
      <h2>Add/Edit Employee</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
