import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



const { createSlice } = require("@reduxjs/toolkit");

const contactsInitialState = []

 const contactsSlice = createSlice(
     {
         name: "contacts",
         initialState: contactsInitialState,
         reducers: {
             addContact: {
                 reducer(state, action) {
                     state.push(action.payload)
                 }
             },
             deleteContact: {
                 reducer(state, action) {
                     return state.filter(elem => elem.id !== action.payload)
                 }
             },
            
         }
    }
)

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}



export const { addContact, deleteContact, contactNameFilter} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

