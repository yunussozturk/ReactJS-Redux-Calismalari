import { createContext , useContext , useState} from "react";

const OnayContext = createContext();

export const OnayProvider = ({children}) =>{

    const [ onayla , setOnayla ] = useState(false)

    const values = {onayla , setOnayla};

    return(
        <OnayContext.Provider value={values}>
            {children}
        </OnayContext.Provider>
    );
};

export const useOnay = () => useContext(OnayContext)