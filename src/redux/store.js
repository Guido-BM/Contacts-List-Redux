// Importar las funciones necesarias de Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importar los reducers de tu aplicación
import authReducer from "./AuthReducers";

// Definir el estado inicial
const initialState = {
  auth: {
    user: null,
  },
};

// Crear el store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: initialState,
});

// Exportar el store
export default store;
