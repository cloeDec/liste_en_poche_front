import api from './api';

// Créer une liste
export const createList = async (data: { userId: number; name: string }) => {
  const response = await api.post('/lists/create', data);
  return response.data;
};

// Récupérer les listes d’un utilisateur
export const getUserLists = async (userId: number) => {
  const response = await api.get(`/lists/user/${userId}`);
  return response.data;
};

// Ajouter un produit à une liste
export const addProductToList = async (data: { listId: number; name: string; quantity: number; unit: string }) => {
  const response = await api.post('/lists/add-product', data);
  return response.data;
};

// Supprimer une liste
export const deleteList = async (id: number) => {
  const response = await api.delete(`/lists/delete/${id}`);
  return response.data;
};
