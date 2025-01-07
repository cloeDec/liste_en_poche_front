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

// Fonction pour se connecter
export const loginUser = async (data: { email: string; password: string }) => {
  const response = await api.post('/auth/login', data); // Endpoint de connexion
  return response.data; // Retourne la réponse (ex. token JWT)
};

// Exemple d'autres fonctions API si nécessaires
export const registerUser = async (data: { nom: string; prenom: string; email: string; password: string }) => {
  const response = await api.post('/auth/register', data); // Endpoint d'inscription
  return response.data;
};

export const getUserLists = async (userId: number) => {
  const response = await api.get(`/lists/user/${userId}`); // Endpoint pour récupérer les listes de l'utilisateur
  return response.data;
};

export default api;
