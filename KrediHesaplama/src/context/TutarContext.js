import {createContext , useState , useContext} from "react";

const TutarContext = createContext();

export const TutarProvider = ({children}) =>{
    const [tutar , setTutar] = useState("")

    const values = {tutar , setTutar};

    return(
        <TutarContext.Provider value={values}>
        {children}
        </TutarContext.Provider>
    );
};

export const useTutar = () => useContext(TutarContext);