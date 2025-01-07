import React from 'react';
import { Router } from './utils/Router';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router
      routes={[
        { path: '/', component: <Login /> },
        { path: '/register', component: <Register /> },
        { path: '/dashboard', component: <Dashboard /> },
      ]}
    />
  );
};

export default App;
