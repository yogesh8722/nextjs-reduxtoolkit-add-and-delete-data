const { configureStore } = require("@reduxjs/toolkit");
import employeeReducer from './slice';
import studentReducer from './apiSlice';

// ek store create kiya
export const store=configureStore({
    reducer:{
        employeeData:employeeReducer,
        studentData:studentReducer
    }
})