import {createContext , useState , useContext} from "react";

const MonthContext = createContext();

export const MonthProvider = ({children}) =>{
    const [month , setMonth] = useState(24)

    const values = {month , setMonth};

    return(
        <MonthContext.Provider value={values}>
        {children}
        </MonthContext.Provider>
    );
};

export const useMonth = () => useContext(MonthContext);