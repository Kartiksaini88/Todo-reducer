import { legacy_createStore as createStore } from "redux";
import { ADD_COUNT } from "./action";
import { reducer } from "./reducer";




export const initState = {
    counter:0,
    todos:[]
}
export const store = createStore(reducer,initState)



