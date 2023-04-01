import React from "react";
import './App.css';
import Container from "./components/Container";
import { KoltukNumaralariProvider } from "./context/KoltukNumaralariContext";
import { OnayProvider } from "./context/OnayContext";
import { SilProvider } from "./context/SilContext";
import { FilmProvider } from "./context/FilmlerContext";



function App(){
  return(
    <KoltukNumaralariProvider>
      <OnayProvider>
        <SilProvider>
          <FilmProvider>
            <Container /> 
          </FilmProvider>
        </SilProvider>
      </OnayProvider>
    </KoltukNumaralariProvider>
  )
}
export default App;