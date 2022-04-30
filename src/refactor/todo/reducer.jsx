import { ADD_COUNT, ADD_TODO ,DELETE_TODO, SORT } from "./action";

export const reducer = (store ,action) =>{



    switch(action.type){
        case ADD_COUNT: return {...store, counter:store.counter + action.payload};
        case ADD_TODO:return {todos:action.payload};
        case DELETE_TODO:return{...store,todos:store.todos.filter((e)=>e.id !==action.payload)}
        case SORT:return{...store,
            todos:[...store.todos].sort((a , b)=>a[action.payload] < b[action.payload] ? 1 : a[action.payload] > b[action.payload] ?  -1 :0)}

        default:return store
    }

}