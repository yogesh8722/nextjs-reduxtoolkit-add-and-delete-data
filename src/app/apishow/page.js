'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Api } from '../reduxToolkit/slice';

const ApiShow = () => {
    const dispatch=useDispatch();
    const apidata=useSelector((state)=>state.employeeData.usersData)
    const isLoading=useSelector((state)=>state.employeeData.isLoading)
    const error=useSelector((state)=>state.employeeData.error)

    useEffect(()=>{
      dispatch(Api())
    },[])
  return (
    <>
      <h2>Api Show</h2>
      {isLoading && <p>Loading.....</p>}
      {error && <p>Error {error}</p>}
      {
        apidata.length > 0 ? apidata.map((item)=>(      
          <h4 key={item.id}>{item.name}</h4>
        )): !isLoading && <p>No data</p>
      }
    </>
  )
}

export default ApiShow;
