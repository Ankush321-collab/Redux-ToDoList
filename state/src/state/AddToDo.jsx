import React, { useState } from 'react'


const AddToDo = ({todo,settodo}) => {
  const [input,setinput]=useState("");
 

  const handleaddtodo=()=>{
    if(input.trim().length>0){
    
      settodo((prevtodo)=>[
        ...prevtodo,
        {id:prevtodo.length,title:input,completed:false}
      ]);
    
  
    setinput("")
  }
    else{
  alert("empty todos are not accepted")
    }
  };
  console.log(todo)
  return (
    <div className='flex gap-2 max-w-4xl mt-3'>

      <input
       type="text" 
       value={input}
       className='w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#7a6ff0] focus:border-transparent transition-all duration-200' 
       placeholder='Add Todo'
       onChange={(e)=>setinput(e.target.value)}
            />

            <button className='rounded-xl px-3 py-1 bg-black gap-4 cursor-pointer ml-3 h-11 w-12 focus:outline-none focus:ring-2 focus:ring-[#d9d9e3] focus:border-transparent transition-all duration-200
            '
            onClick={handleaddtodo}
            >ADD</button>
    </div>
    
  )
}

export default AddToDo