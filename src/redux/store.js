import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer, persistConfig } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";



const rootReducer = combineReducers({
     contacts: contactsReducer,
    filters: filterReducer,
})
const persistRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistRootReducer
})

export const persistor = persistStore(store)