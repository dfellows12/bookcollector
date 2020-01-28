import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Booklist'
import ThemeContextProvider from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
