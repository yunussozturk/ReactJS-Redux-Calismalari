import { createContext , useContext , useState} from "react";

const SilContext = createContext();

export const SilProvider = ({children}) =>{

    const [ sil , setSil ] = useState(false)

    const values = {sil , setSil};

    return(
        <SilContext.Provider value={values}>
            {children}
        </SilContext.Provider>
    );
};

export const useSil = () => useContext(SilContext)