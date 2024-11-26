const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState={
    students:[],
    // isLoading:false,
    // error:null,
    // usersData:[]
}

// export const Api=createAsyncThunk("apiData",async()=>{
//     const response=await fetch ('https://jsonplaceholder.typicode.com/users');
//     return response.json();
// })

const StudentSlice=createSlice({
    name:"Users",
    initialState,
    reducers:{
        addStudents:(state,action)=>{
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.students.push(data)
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(Api.pending,(state)=>{
    //         state.isLoading=true;
    //         state.error=null
    //     })
    //     builder.addCase(Api.fulfilled,(state,action)=>{
    //         state.isLoading=false
    //         state.usersData=action.payload
    //     })
    //     builder.addCase(Api.rejected,(state)=>{
    //         state.isLoading=false;
    //         state.error=action.error.message;
    //     })
    // }
})

export const {addStudents}=StudentSlice.actions;
export default StudentSlice.reducer;