export const LOGIN_USER = "LOGIN_USER";
export const SIGN_OUT = "SIGN_OUT";

export const authorizedUsers = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];

export const ADD_CONTACT = "ADD_CONTACT";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const signIn = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
