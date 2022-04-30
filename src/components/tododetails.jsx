import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { todos } from "../refactor/todo/action"
import { store } from "../refactor/todo/store"

let TodoDetails = ()=>{
    let state = store.getState()
    console.log("state",state)
    let {id} =useParams()
    let dispatch = useDispatch()

    let todoStore = useSelector((store)=>store.todos)
 console.log(todoStore)
  
    
    useEffect(()=>{
        getdata()
      },[])
     
      let getdata = async()=>{
           try {
             let res = await fetch(`http://localhost:8080/todos/${id}`)
             let data = await res.json()
             data = [data]
             dispatch(todos(data))
           } catch (error) {
             console.log(error)
           }
      }
    return(
        <div>
             <h3>{todoStore.map(e => <div>{e.id}-{e.title}-{e.status}<br/></div>) }</h3> 
        </div>
    )
}

export default TodoDetails