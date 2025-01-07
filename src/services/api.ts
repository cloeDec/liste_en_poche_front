import axios from 'axios';

// Configuration d'Axios
const api = axios.create({
  baseURL: 'http://localhost:5000', // Adresse de votre back-end
  headers: {
    'Content-Type': 'application/json',
  },
});

// Gestion des erreurs (facultatif)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur API :', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
