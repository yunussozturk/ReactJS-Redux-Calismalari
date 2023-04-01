import { createSlice } from "@reduxjs/toolkit";
import arrayShuffle from "array-shuffle";
import Kelimeler from "../Odev5-KelimeTesti/Kelimeler/HazirKelimeler.json"

export const wordSlice = createSlice({
    name : "word",
    initialState : {
        hazirKelimeler : Kelimeler.title,
        hazirKelimelerShuffle : [],
        yazdigimizKelimeler : [],
        saniye : 60,
        dakika : 1,
        dogruKelimeler : [],
    },
    reducers : {
        yazdigimizKelimeyiEkle : (state , action) =>{
            state.yazdigimizKelimeler = [...state.yazdigimizKelimeler , action.payload] 
        },
        saniyeAzalt : (state) =>{
            state.saniye = state.saniye - 1;
            state.dakika = Math.floor(state.saniye / 60);
        },
        dogruKelimeEkle : (state , action) =>{
            state.dogruKelimeler.push(action.payload)
        },
        karistir : (state , action) =>{
            state.hazirKelimelerShuffle = arrayShuffle(action.payload)
        },
        saniyeRestart : (state) =>{
            state.dakika = 1;
            state.saniye = 60;
            state.yazdigimizKelimeler = [];
            state.dogruKelimeler = [];
            state.hazirKelimeler = Kelimeler.title;
        }
    }
})

export const { yazdigimizKelimeyiEkle , saniyeAzalt , dogruKelimeEkle  , karistir , saniyeRestart} = wordSlice.actions
export default wordSlice.reducer;