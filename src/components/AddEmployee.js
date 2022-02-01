import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {

    const [employee, addEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    });
    
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const value = e.target.value;
        addEmployee({ ...employee, [e.target.name]:value});
    }

    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate('/employeeList')
        }).catch((error) => {
            console.log(error)
        })
    }

  return <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-8 py-8'>
          <div className='font-thin text-2xl tracking-wider'>
              <h1>Add New Employee</h1>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
              <label className='block text-gray-600 text-sm font-normal'>First Name</label>
              <input 
                type='text' 
                className='h-10 border w-96 mt-2 px-2' 
                name='firstName' 
                onChange={(e)=> handleChange(e)}
                value={employee.firstName}></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
              <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
              <input 
                type='text' 
                className='h-10 border w-96 mt-2 px-2' 
                name='lastName' 
                onChange={(e)=> handleChange(e)}
                value={employee.lastName}></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4'>
              <label className='block text-gray-600 text-sm font-normal'>Email</label>
              <input 
                type='email' 
                className='h-10 border w-96 mt-2 px-2' 
                name='emailId'
                onChange={(e)=> handleChange(e)} 
                value={employee.emailId}></input>
          </div>
          <div className='items-center justify-center h-14 w-full my-4 pt-4 space-x-4'>
              <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700'>Save</button>
              <button className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700'>Clear</button>
          </div>
      </div>
  </div>;
};

export default AddEmployee;
