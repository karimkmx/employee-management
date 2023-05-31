import React from "react";
import { Link } from 'react-router-dom';


const HomePage = () => {


return (

<div className="home">
<div class="rectangle"></div>
<div class="rectangle2"></div>

  <div className="column">
    <h1>Welcome to Employee Management</h1>
    <p>
      This is a simple Employee Management application where you can add, edit, and delete employees.
    </p>
    <p>
      To get started, click on the "Employees" link in the navigation bar to view the list of employees.
    </p>
    <Link to="/employees">
      <button className="black-btn">Employees</button>
    </Link>
  </div>
  <div className="column second">


    <img src="/img/dashboard.svg" alt="Dashboard" className="dashboard-image" />
  </div>
</div>


);
};

export default HomePage;