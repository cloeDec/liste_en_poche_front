import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [lists, setLists] = useState<string[]>([]);

  const handleCreateList = () => {
    const newList = prompt('Nom de la nouvelle liste :');
    if (newList) {
      setLists([...lists, newList]);
    }
  };

  return (
    <div className="container">
      <h1>Tableau de bord</h1>
      <button className="button-create-list" onClick={handleCreateList}>
        Créer une liste
      </button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
