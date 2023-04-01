import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name : "note",
    initialState: {
        items : localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
        renk : "geri",
    },
    reducers:{
        changeColor: (state , action) =>{
            state.renk = action.payload
        },
        addNote : (state , action) =>{
            state.items.push(action.payload)
            
        },
        destroy : (state , action) =>{
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        },
    }
})

export default notesSlice.reducer;
export const {changeColor , addNote , destroy} = notesSlice.actions