import React from 'react';
import './common.css'; 
import Layout from './Layout';

const employeeData = [
    {
        id: 1,
        name: 'John Doe',
        mobile: '123-456-7890',
        email: 'john@example.com',
        address: '123 Main St, City, Country',
        pan: 'ABCDE1234F',
        accountNo: '1234567890',
    },
    {
        id: 2,
        name: 'Jane Smith',
        mobile: '987-654-3210',
        email: 'jane@example.com',
        address: '456 Elm St, City, Country',
        pan: 'FGHIJ5678K',
        accountNo: '0987654321',
    },
    // Add more employee data as needed
];

const EmployeeReport = () => {
    return (
        <Layout>
        <div className="employee-report">
            <center>  <h2>Employee Report</h2></center>
          
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>PAN</th>
                        <th>Account No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.mobile}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.pan}</td>
                            <td>{employee.accountNo}</td>
                            <td>
                                <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="#">Add Employee</a>
        </div>
        </Layout>
    );
};

export default EmployeeReport;
