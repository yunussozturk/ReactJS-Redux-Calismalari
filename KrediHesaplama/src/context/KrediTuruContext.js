import {createContext , useState , useContext} from "react";

const KrediTuruContext = createContext();

export const KrediTuruProvider = ({children}) =>{
    const [krediTuru , setKrediTuru] = useState("ihtiyacKredisi")

    const values = {krediTuru , setKrediTuru};

    return(
        <KrediTuruContext.Provider value={values}>
        {children}
        </KrediTuruContext.Provider>
    );
};

export const useKrediTuru = () => useContext(KrediTuruContext);