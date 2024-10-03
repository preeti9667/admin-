'use client'
import React,{useState} from "react";

import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/app/reducer/store";
import { addUser } from "@/app/reducer/formDataSlice";
import CategoryForm from "@/app/component/CategoriesForm";

interface formData{
    category: string,
     subcategory : {value:string}[],
 }
export default function Check(){
    const [open, setOpen] = useState(false);
    
    const dispatch = useDispatch()
    const formData = useSelector((state: RootState)=> state.formData.data);
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
const handleSubmit=(values:formData)=>{
  dispatch(addUser(values));
 
}

    return(
        <>
        <button onClick={handleOpen}>hello</button>
          <CategoryForm open={open} close={handleClose} onSubmit={handleSubmit}/>
        {formData.map((item,index)=>(
            <div key={index}>
                {item.category}
                {item.subcategory.map((text,index)=>(
                    <div key={index}>{text.value}</div>
                ))}
                </div>
            
        ))}
        </>
    )
}