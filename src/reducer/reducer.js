
export const reducer=(state,action)=>{
    switch(action.type){
        case'ADD':
        const newuser=[...state.users,action.payload];
        return {
            ...state,
            users:newuser,
        }
        case 'REMOVE':
            const filteruser=state.users.filter((usser)=>  usser.id!==action.payload);
           return {
            ...state,
            users:filteruser,
           }
     }
        return state;
 };


 