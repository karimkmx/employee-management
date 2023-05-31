import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend URL

const apiService = {
  getEmployees: async () => {
    try {
      const query = `
        query {
          employees {
            id
            firstName
            lastName
            age
          }
        }
      `;
      const response = await axios.post(`${BASE_URL}/graphql`, { query });
      console.log("response sent from server:");
      console.log(response);
      return response.data.data.employees;
    } catch (error) {
      console.error('Error while fetching employees:', error);
      throw error;
    }
  },

  createEmployee: async (employee) => {
    try {
      const query = `
        mutation($input: EmployeeInput!) {
          createEmployee(input: $input) {
            id
            firstName
            lastName
            age
          }
        }
      `;
      const variables = {
        input: {
          firstName: employee.firstName,
          lastName: employee.lastName,
          age: parseInt(employee.age),
        },
      };
      console.log("variables sent from api:");
      console.log(variables);
     const json =  JSON.stringify(variables);
     console.log(json);
      const response = await axios.post(`${BASE_URL}/graphql`,  {query, variables});
      return response.data.data.createEmployee;
    } catch (error) {
      console.error('Error while creating employee:', error);
      throw error;
    }
  },

  updateEmployee: async (employee) => {
    try {
      const query = `
        mutation($id: ID!, $input: EmployeeInput) {
          updateEmployee(id: $id, input: $input) {
            id
            firstName
            lastName
            age
          }
        }
      `;
      const variables = {
        id:  parseInt(employee.id),
        input: {
          firstName: employee.firstName,
          lastName: employee.lastName,
          age: parseInt(employee.age),
        },
      };
      const response = await axios.post(`${BASE_URL}/graphql`, { query, variables });
      return response.data.data.updateEmployee;
    } catch (error) {
      console.error('Error while updating employee:', error);
      throw error;
    }
  },

  deleteEmployee: async (employeeId) => {
    try {
      const query = `
        mutation($id: ID!) {
          deleteEmployee(id: $id){
            id
            firstName
            lastName
            age
          }
          
        }
      `;
      const variables = {
        id: parseInt(employeeId),
      };
      const response = await axios.post(`${BASE_URL}/graphql`, { query, variables });
      return response.data.data.deleteEmployee;
    } catch (error) {
      console.error('Error while deleting employee:', error);
      throw error;
    }
  },
};

export default apiService;
