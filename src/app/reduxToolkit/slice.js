const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState={
    employees:[]
}

const Slice=createSlice({
    name:'addEmployeesSlice',
    initialState,
    reducers:{
        // add data ke liye
        addEmployeesh:(state,action)=>{
            console.log(action);
            
            const data ={
                id:nanoid(),
                name:action.payload
            }
            state.employees.push(data)
        },
        

        // remove / delete krne ke liye
        removeEmployeesh:(state,action)=>{
            const data=state.employees.filter((item)=>{
                return item.id !== action.payload
            })
            state.employees=data;
        }
    }
});

export const {addEmployeesh,removeEmployeesh}=Slice.actions;
export default Slice.reducer;