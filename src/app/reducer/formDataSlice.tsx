// const {createSlice, PayloadAction} = require('@reduxjs/toolkit');
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface formData{
   category: string,
    subcategory : {value:string}[],
}
interface formDataSate{
  data : formData[];
    
}
const initialState:formDataSate={
    // users:[]
    data:[],
 
}
const slice = createSlice({
    name:'formData',
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<formData>)=>{
            // console.log(action)
                state.data.push(action.payload);
             
            // const data={
                // name:action.payload,
                
            // }
            // state.users.push(data);
        },
        
    }

})
export const {addUser,} = slice.actions;
export default slice.reducer;
