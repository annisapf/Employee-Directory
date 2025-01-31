import React from "react";

import "./style.css";


function Table(props) {
  return (
    <table className="table table-hover" id="employers">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name
          
          </th>
          <th scope="col">Last Name
            
          </th>
          <th scope="col">Phone #</th>
          <th scope="col">Email Address</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {
          props.employees.map((employee, index) => {
            let date = new Date(employee.dob.date);
            let newDate =
              `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
            return (
              <tr key={index}>
                <td>
                  <img src={employee.picture.large} alt={employee.name.first}></img>
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{newDate}</td>
              </tr>)
          })
        }
      </tbody>
    </table>
  );
}

export default Table;