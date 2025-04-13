import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditBook from "./pages/EditBook";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/add-book" element={<PrivateRoute element={<AddBook />} />} />
          <Route path="/edit-book/:id" element={<PrivateRoute element={<EditBook />} />} />

          <Route path="/book/:id" element={<PrivateRoute element={<BookDetail />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
