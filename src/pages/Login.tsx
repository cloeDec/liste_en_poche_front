import React, { useState } from 'react';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setMessage('Connexion réussie !');
      } else {
        const data = await response.json();
        setMessage(data.message || 'Erreur lors de la connexion');
      }
    } catch (error) {
      setMessage('Erreur réseau !');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
