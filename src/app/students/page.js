'use client'
import React, { useState } from 'react'
import { addStudents } from '../reduxToolkit/apiSlice';
import { useDispatch, useSelector } from 'react-redux';

const Students = () => {
    const [std,setStd]=useState('');
    const dispatch=useDispatch();
    const stdData=useSelector((data)=>data.studentData.students);

    const dataDispatch = () => {
        console.log(std);
        if(!std) return;
        dispatch(addStudents(std));
        setStd('')
    }
  return (
    <>
      <h2>Register Students</h2>
      <input type='text' value={std} onChange={(e)=>setStd(e.target.value)} placeholder='Register Students' />
      <br /><br />
      <button onClick={dataDispatch}>Register</button>
      <h4>Show Students</h4>
      {
        stdData.length && stdData.map((item)=>(
            <h6 key={item.id}>{item.name}</h6>
        ))
      }    
    </>
  );
}

export default Students
