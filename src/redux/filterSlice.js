const { createSlice } = require("@reduxjs/toolkit");

const contactsInitialState = ""

 const filterSlice = createSlice(
     {
         name: "filters",
         initialState: contactsInitialState,
         reducers: {
             addFilter: {
                 reducer(state, action) {
                    return state = action.payload
                 }
             }
         }
    }
)

export const {addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
