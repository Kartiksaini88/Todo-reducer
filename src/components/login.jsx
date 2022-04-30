import { useContext } from "react"
import { AuthContext } from "./authcontext"
import { useNavigate } from "react-router-dom";
let Login = ()=>{
    let {auth} = useContext(AuthContext)
    console.log(auth)
    let navigate = useNavigate()
    return (
        <div><input type="text" />
        <br />
        <input type="text" />
        <br />
        <button onClick={()=>{
         auth.status = true
         console.log("login",auth)
         navigate(-2 , { replace: true })
        }}>Login</button>
        </div>
    )
}

export default Login