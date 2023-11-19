// Importa el array de contactos de ejemplo
import sampleContacts from "../Components/SampleContacts";
import { ADD_CONTACT, LOGIN_USER, SIGN_OUT } from "./AuthActions";

const initialState = {
  contacts: sampleContacts,
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isAuthenticated: true };
    case SIGN_OUT:
      return { ...state, user: null, isAuthenticated: false };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return state;
  }
};

export default authReducer;
