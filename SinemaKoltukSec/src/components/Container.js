import React from "react";
import Perde from "./Perde";
import Salonlar from "./Koltuklar/salonlar";
import Movie from "./Movie";
import DoluBosSecili from "./DoluBosSecili";
import Onay from "./Onay";

function Container(){
    return(
        <div>
            <Perde />
            <Salonlar />
            <Movie />
            <DoluBosSecili />
            <Onay />    
        </div>
    )
}
export default Container