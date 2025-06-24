const initialstate={
    todo:[]
}

const todoreducer=(state=initialstate,action)=>{
    switch(action.type){
        case'Add_Todo':
        return{
            ...state,
            todo:[
                ...state.todo,action.payload 
            ]
        }

        case 'Update_Todo':
            return {
                ...state,
                todo:action.payload
            }
            default:
                return state;

        
    }
}
export default todoreducer;
