import React, { createContext,useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false);
  
  const [token,settoken]= useState(0);
  const login= async() =>{
    settoken("QpwL5tke4Pnpja7X4");
   let res= await fetch("https://reqres.in/api/login",{
       method:"POST",
       headers:{"content-type":"application/json"},
       body: JSON.stringify({
           "email": "eve.holt@reqres.in",
           "password": "cityslicka"
       })
   })
   let data= await res.json();
   //console.log(data.token);
    return data.token;
  }
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth,token,settoken,login}}>
        {children}
    </AuthContext.Provider>
  )
}
