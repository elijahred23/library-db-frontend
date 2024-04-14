import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './Books';
import Users from './Users';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            LIBRARY DB
          </Typography>
          <Link className="link" to="/" color="inherit" underline="none">
            Home
          </Link>
          <Link className="link" to="/books" color="inherit" underline="none">
            Books
          </Link>
          <Link className="link" to="/users" color="inherit" underline="none">
            Users
          </Link>
        </Toolbar>
      </AppBar>
      <div>
        <Routes>
          <Route path="/" element={<div style={{display:"flex",marginTop:"20vh",alignItems:"center", justifyContent:"center"}}><div>Home</div></div>} />
          <Route path="/books" element={<Books />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}
