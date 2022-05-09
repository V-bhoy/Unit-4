import React, { useContext} from 'react'
import { AuthContext } from '../context/AuthProvider'

const Nav = () => {
   const {login,setIsAuth,token} = useContext(AuthContext);
   const check=async ()=>{
       let data=await login();
       if(data===token){
           setIsAuth(true);
       }
       
   }
  
  return (
    <div style={{display:"flex", justifyContent:"center", width:"100%", backgroundColor:"greenyellow", padding:"20px"}}>
        <button onClick={()=>{check();}} >Login</button>
        <button onClick={()=>{setIsAuth(false)}}>Logout</button>
    </div>
  )
}

export default Nav