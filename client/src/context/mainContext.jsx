import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
const mainContext = createContext({
    user:null,
    LogoutHandler(){}
})

export const useMainContext = ()=> useContext(mainContext)

export const MainContextProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const navigate = useNavigate()
    const LogoutHandler = ()=>{
        navigate("/login")
        toast.success("Logout Success")
    }


  return (
    <mainContext.Provider value={{user,LogoutHandler}}>{children}</mainContext.Provider>
  )
} 