import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
    const {isAuth,token} = useContext(AuthContext);
    //const [token,settoken]= useState(0);
    //let status;
   
  return (
    <div style={{textAlign:"center", marginTop:"50px",fontSize:"30px"}}>{isAuth?`Status:Logged In Successfully Token:${token}`:"Please Login"}</div>
  )
}

export default Login