'use client'
const { createSlice,nanoid,createAsyncThunk } = require("@reduxjs/toolkit");

const initialState={
    employees:[],
    isLoading:false,
    error:null,
    usersData:[]
}
export const Api=createAsyncThunk("apiData",async()=>{
    const response=await fetch ('https://jsonplaceholder.typicode.com/users');
    return response.json();
})

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
    },
    extraReducers:(builder)=>{
        builder.addCase(Api.pending,(state)=>{
            state.isLoading=true;
            state.error=null
        })
        builder.addCase(Api.fulfilled,(state,action)=>{
            state.isLoading=false
            state.usersData=action.payload
        })
        builder.addCase(Api.rejected,(state)=>{
            state.isLoading=false;
            state.error=action.error.message;
        })
    }
});

export const {addEmployeesh,removeEmployeesh}=Slice.actions;
export default Slice.reducer;