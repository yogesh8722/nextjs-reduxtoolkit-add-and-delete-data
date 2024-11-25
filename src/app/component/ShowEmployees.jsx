'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeEmployeesh } from '../reduxToolkit/slice'

const ShowEmployees = () => {
  const empdata=useSelector((data)=>data.employees)
  const dispatch=useDispatch();
  // console.log(empdata);
  
  return (
    <>
    <div><h1 style={{marginTop:'15px',textAlign:'center',fontSize:'60px'}}>Show Employee</h1></div>
      {
        empdata.map((item)=>(
          <h4 key={item.id}>
            <span>{item.name}</span>
            <button onClick={()=>dispatch(removeEmployeesh(item.id))} style={{backgroundColor:'red',color:'white',border:'none',borderRadius:'5px',marginLeft:'5px'}}>delete</button>
            </h4>
        ))
      }
    </>
  )
}

export default ShowEmployees
