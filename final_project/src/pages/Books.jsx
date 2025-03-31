// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { setBooks, addBook, deleteBook } from "../context/BooksContext";
// import BookCard from "../components/BookCard";
// import BookForm from "../components/BookForm";

// class Books extends Component {
//     componentDidMount() {
//         // replace later
//         const books = [
//             { id: 1, title: "Book One", author: "Author One" },
//             { id: 2, title: "Book Two", author: "Author Two" },
//         ];
//         this.props.setBooks(books);
//     }

//     handleAddBook = (bookData) => {
//         this.props.addBook(bookData);
//     };

//     handleDeleteBook = (bookId) => {
//         this.props.deleteBook(bookId);
//     };

//     render() {
//         const { books } = this.props;

//         return (
//             <div>
//                 <h1>Books</h1>

//                 <h2>Add New Book</h2>
//                 <BookForm onSubmit={this.handleAddBook} />

//                 <h2>All Books</h2>
//                 <div className="book-list">
//                     {books.map((book) => (
//                         <div key={book.id}>
//                             <BookCard book={book} />
//                             <button onClick={() => this.handleDeleteBook(book.id)}>Delete</button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     books: state.books.books,
// });

// const mapDispatchToProps = { setBooks, addBook, deleteBook };

// export default connect(mapStateToProps, mapDispatchToProps)(Books);
