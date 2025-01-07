import React, { useState } from 'react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({ nom: '', prenom: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Inscription réussie !');
        setFormData({ nom: '', prenom: '', email: '', password: '' });
      } else {
        const data = await response.json();
        setMessage(data.message || 'Erreur');


      }
    } catch (error) {
      setMessage('Erreur réseau !');
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
