import { createContext , useContext , useState} from "react";

const FilmContext = createContext();

export const FilmProvider = ({children}) =>{

    const [ film , setFilm ] = useState("movie1")

    const values = {film , setFilm};

    return(
        <FilmContext.Provider value={values}>
            {children}
        </FilmContext.Provider>
    );
};

export const useFilm = () => useContext(FilmContext)