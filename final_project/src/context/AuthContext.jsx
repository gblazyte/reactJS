// import React, { createContext, useContext, useReducer } from 'react';

// // Initial state
// const initialState = {
//     user: null,
//     isAuthenticated: false,
//     loading: false,
//     error: null,
// };

// // Reducer function to handle actions
// const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 ...state,
//                 user: action.payload,
//                 isAuthenticated: true,
//             };
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 user: null,
//                 isAuthenticated: false,
//             };
//         case 'SET_AUTH_ERROR':
//             return {
//                 ...state,
//                 error: action.payload,
//             };
//         case 'REGISTER':
//             return {
//                 ...state,
//                 user: action.payload,
//                 isAuthenticated: true,
//             };
//         default:
//             return state;
//     }
// };

// // Create context
// const AuthContext = createContext();

// // Create provider
// export const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     // Actions
//     const login = (user) => dispatch({ type: 'LOGIN', payload: user });
//     const logout = () => dispatch({ type: 'LOGOUT' });
//     const setAuthError = (error) => dispatch({ type: 'SET_AUTH_ERROR', payload: error });
//     const register = (user) => dispatch({ type: 'REGISTER', payload: user });

//     return (
//         <AuthContext.Provider value={{ state, login, logout, setAuthError, register }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Custom hook to use authentication context
// export const useAuth = () => useContext(AuthContext);
