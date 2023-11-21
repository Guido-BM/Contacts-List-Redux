import { createSlice } from "@reduxjs/toolkit";
import sampleContacts from "../components/SampleContacts";
export const initialState = {
  user: null,
  isAuthenticated: false,
  contacts: sampleContacts,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signIn: (state, action) => ({
      ...state,
      user: action.payload,
      isAuthenticated: true,
    }),

    signOut: (state) => ({ ...state, user: null, isAuthenticated: false }),

    addContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),

    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(
        (contact) => contact.id !== action.payload
      ),
    }),
    editContact: (state, action) => ({
      ...state,
      contacts: state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      ),
    }),
  },
});
export const { signIn, signOut, addContact, deleteContact, editContact } =
  authSlice.actions;
export default authSlice.reducer;
