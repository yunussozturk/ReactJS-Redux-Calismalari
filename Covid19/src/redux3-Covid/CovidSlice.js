import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const ulkeIsimleriApi = createAsyncThunk('country', async () =>{
    const res = await axios(`https://api.covid19api.com/countries`)
    return res.data;
})

export const seciliUlkeVerisiApi = createAsyncThunk('veriler', async (seciliUlke) =>{
    const res = await axios(`https://api.covid19api.com/country/${seciliUlke}`)
    return res.data;
})

export const globalVerilerApi = createAsyncThunk('globalveriler', async () =>{
    const res = await axios(`https://api.covid19api.com/world/total`)
    return res.data;
})
 

export const covidSlice = createSlice({
    name : "covid",
    initialState :{
        ulkeIsimleri : [],
        seciliUlke : "global",
        seciliUlkeVerisi : [],
        seciliUlkeVerisiApiisLoading : false,
        globalVeriler : {},
    },
    reducers : {
        seciliUlkeDegistir : (state , action) =>{
            state.seciliUlke = action.payload
        }
    },
    extraReducers : {
        [ulkeIsimleriApi.fulfilled] : (state , action) =>{
            state.ulkeIsimleri = action.payload
        },
        [seciliUlkeVerisiApi.pending] : (state ,action) =>{
            state.seciliUlkeVerisiApiisLoading = true
        },
        [seciliUlkeVerisiApi.fulfilled] : (state , action) =>{
            state.seciliUlkeVerisiApiisLoading = false
            state.seciliUlkeVerisi = action.payload.pop()
        },
        [globalVerilerApi.pending] : (state , action) =>{
            state.seciliUlkeVerisiApiisLoading = true
        },
        [globalVerilerApi.fulfilled] : (state , action) =>{
            state.seciliUlkeVerisiApiisLoading = false
            state.globalVeriler = action.payload
        }
    }
});

export const {seciliUlkeDegistir} = covidSlice.actions;
export default covidSlice.reducer;
