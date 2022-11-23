import Dashboard from "./components/Dashboard/Dashboard";
import BookList from "./components/BookList/BookList";
import Book from "./components/BookList/Book/Book";
import Home from "./components/Home/Home";
import NotFound from './components/NotFound'

import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return  (
    <> 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Books</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/book">
          <Route index element={<BookList/>}/>
          <Route path=":id" element={<Book/>}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
    
  )
    
  
}

export default App;
