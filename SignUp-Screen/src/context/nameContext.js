import { createContext, useContext, useEffect, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({children}) =>{

    const [name , setName] = useState(localStorage.getItem("name") ? localStorage.getItem("name") : "")

    useEffect(() =>{
        localStorage.setItem("name" , name)
    },[name])

    const values = {name , setName};

    return(
        <NameContext.Provider value={values}>
            {children}
        </NameContext.Provider>
    )
}

export const useName = () => useContext(NameContext)