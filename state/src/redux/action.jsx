export const Add_Todo="Add_Todo"
export const Update_Todo="Update_Todo"


export const addtodo=(id=0,title="",completed=false)=>({
    type:Add_Todo,
    payload:{
        id,title,completed,
}
})


export const updatetodo=(todo)=>({
    type:Update_Todo,
    payload:todo,
})