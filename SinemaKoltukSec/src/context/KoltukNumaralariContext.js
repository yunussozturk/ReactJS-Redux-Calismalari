import { createContext , useContext , useState} from "react";

const KoltukNumaralariContext = createContext();

export const KoltukNumaralariProvider = ({children}) =>{

    const [ koltukNo , setKoltukNo ] = useState([])

    const values = {koltukNo , setKoltukNo};

    return(
        <KoltukNumaralariContext.Provider value={values}>
            {children}
        </KoltukNumaralariContext.Provider>
    );
};

export const useKoltukNumaralari = () => useContext(KoltukNumaralariContext)