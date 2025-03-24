import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav>
            {/* Navigation à implémenter */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>
          {/* Footer à implémenter */}
        </footer>
      </div>
    </Router>
  );
}

export default App; 