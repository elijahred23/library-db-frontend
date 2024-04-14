import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './Books';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>LIBRARY DB</div>} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;