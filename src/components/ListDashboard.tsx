import React, { useEffect, useState } from "react";
import listService from "../services/listService";

interface List {
  id_liste: number;
  date_creation: string;
}

const ListDashboard: React.FC = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await listService.fetchListe();
        console.log(response.data);
        setLists(response.data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLists();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div>
      <h1>Liste des Listes</h1>
      <ul>
        {lists.map((list) => (
          <li key={list.id_liste}>
            ID: {list.id_liste} - Date de création: {list.date_creation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDashboard;
