'use client'
import { useState } from 'react';
import styles from '../addEmp.module.css';
import ShowEmployees from './ShowEmployees';
import { useDispatch } from 'react-redux';
// import { addEmployeesh } from '../slice'; // Import your action here
import { addEmployeesh } from '../reduxToolkit/slice';

function handleSubmit(e) {
    e.preventDefault();
}
const AddEmployees = () => {
    const [names, setNames] = useState('')

    const dispatch = useDispatch();
    
    
    const dataDispatch = () => {
        console.log(names);
        if(!names) return;
        dispatch(addEmployeesh(names))
        setNames('')
    }
    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.name}>Add Employees</label><br></br><br></br>
                        <input className={styles.input} type="text" placeholder='Enter Your Name' value={names} onChange={(e) => setNames(e.target.value)} /><br /><br />
                    </div>
                    <button className={styles.btn} onClick={dataDispatch} type="submit">Add</button>
                </form>
            </div>
            <ShowEmployees />
        </>
    )
}

export default AddEmployees