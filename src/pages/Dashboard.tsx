import React, { useState, useEffect } from 'react';
import { createList, getUserLists, deleteList } from '../services/listService';

const Dashboard: React.FC = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const userId = 1; // Remplacez par l'ID utilisateur récupéré depuis le JWT ou le contexte

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    const data = await getUserLists(userId);
    setLists(data);
  };

  const handleCreateList = async () => {
    if (!newListName) return;
    await createList({ userId, name: newListName });
    setNewListName('');
    fetchLists();
  };

  const handleDeleteList = async (id: number) => {
    await deleteList(id);
    fetchLists();
  };

  return (
    <div>
      <h1>Vos listes de courses</h1>
      <input
        type="text"
        placeholder="Nom de la liste"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
      />
      <button onClick={handleCreateList}>Créer une liste</button>

      <ul>
        {lists.map((list: any) => (
          <li key={list.id}>
            {list.name} - {list.date_creation}
            <button onClick={() => handleDeleteList(list.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
