// import React, { createContext, useContext, useReducer } from 'react';

// // Initial state for books
// const initialState = {
//     books: [],
//     loading: false,
//     error: null,
// };

// // Reducer function to handle actions
// const booksReducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_BOOKS':
//             return {
//                 ...state,
//                 books: action.payload,
//             };
//         case 'ADD_BOOK':
//             return {
//                 ...state,
//                 books: [...state.books, action.payload],
//             };
//         case 'UPDATE_BOOK':
//             return {
//                 ...state,
//                 books: state.books.map((book) =>
//                     book.id === action.payload.id ? action.payload : book
//                 ),
//             };
//         case 'DELETE_BOOK':
//             return {
//                 ...state,
//                 books: state.books.filter((book) => book.id !== action.payload),
//             };
//         default:
//             return state;
//     }
// };

// // Create context
// const BooksContext = createContext();

// // Create provider for books state and actions
// export const BooksProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(booksReducer, initialState);

//     // Actions for managing books
//     const setBooks = (books) => dispatch({ type: 'SET_BOOKS', payload: books });
//     const addBook = (book) => dispatch({ type: 'ADD_BOOK', payload: book });
//     const updateBook = (book) => dispatch({ type: 'UPDATE_BOOK', payload: book });
//     const deleteBook = (bookId) => dispatch({ type: 'DELETE_BOOK', payload: bookId });

//     return (
//         <BooksContext.Provider value={{ state, setBooks, addBook, updateBook, deleteBook }}>
//             {children}
//         </BooksContext.Provider>
//     );
// };

// // Custom hook to use books context
// export const useBooks = () => useContext(BooksContext);
