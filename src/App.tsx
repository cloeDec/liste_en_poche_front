import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Router>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          {/* Logo ou titre à gauche */}
          <Link to="/" className="brand">
            Liste en Poche
          </Link>

          {/* Bouton Déconnexion à droite */}
          {isAuthenticated && (
            <button className="logout-button" onClick={logout}>
              Déconnexion
            </button>
          )}
        </nav>
      </header>

      {/* Contenu principal */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
