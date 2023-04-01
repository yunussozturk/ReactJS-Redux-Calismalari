import {useState} from "react";

import './App.css';
import Header from './components/Header';
import Kredi from "./components/Credit";
import Doviz from './components/Doviz';
import HesaplamaDetayi from './components/HesaplamaDetayi';
import { MonthProvider } from './context/MonthContext';
import { TutarProvider } from './context/TutarContext';
import { KrediTuruProvider } from './context/KrediTuruContext';


function App() {

  const [aylikTutar , setAylikTutar] = useState("")
  const [ detayGoster , setDetayGoster] = useState(false)

  return (
    <MonthProvider>
      <TutarProvider>
        <KrediTuruProvider>
          <Header />
          <Kredi aylikTutar={aylikTutar} setAylikTutar={setAylikTutar} detayGoster={detayGoster} setDetayGoster={setDetayGoster} />
          <Doviz />
          {(detayGoster === true) && (<HesaplamaDetayi aylikTutar={aylikTutar} setAylikTutar={setAylikTutar} />)}
        </KrediTuruProvider>
      </TutarProvider>
    </MonthProvider>
  );
}

export default App;
