const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors'); 





// Dummy data
let employees = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 30 },
  // Add more employees as needed
];

//  GraphQL schema
const schema = buildSchema(`
type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
  }
  
  input EmployeeInput {
    firstName: String!
    lastName: String!
    age: Int!
  }
  
  type Query {
    employees: [Employee]
  }
  
  type Mutation {
    createEmployee(input: EmployeeInput!): Employee
    updateEmployee(id: ID!, input: EmployeeInput): Employee
    deleteEmployee(id: ID!): Employee
  }
  
`);

// Define the resolver functions
const root = {
    employees: () => employees,
    createEmployee: ({ input }) => {
        console.log("Server Create!");
        const id = employees.length + 1;
        const newEmployee = { id, ...input };
        console.log("input sent from server:");
        console.log(input);
        console.log(newEmployee);
        employees.push(newEmployee);
        return newEmployee;
      },
    updateEmployee: ({ id, input }) => {
        console.log("update sent from server:");
        console.log("id");
        console.log(id);
      const employee = employees.find((e) => e.id == id);
      if (!employee) {
        console.log("not found");
        console.log(employee);

        throw new Error(`Employee not found with ID: ${id}`);
        
      }
      console.log(" found");

        console.log(employee);
      Object.assign(employee, input);
      return employee;
    },
    deleteEmployee: ({ id }) => {
        console.log("delete from server:");
        console.log(id);
      const index = employees.findIndex((e) => e.id == id);
      if (index === -1) {
        throw new Error(`Employee not found with ID: ${id}`);
      }
      const deletedEmployee = employees.splice(index, 1)[0];
      return deletedEmployee;
    },
  };
  

// Create an Express server
const app = express();

// Add middleware for parsing JSON requests
app.use(express.json());

// Add middleware for enabling CORS
app.use(cors());


// GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // Enable the GraphiQL UI for testing
  })
);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});