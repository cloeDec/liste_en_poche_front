import axios from "axios";

function fetchListe() {
  return axios.get("http://localhost:3000/lists");
}

// function addListe(list: any) {
//   return axios.post("http://localhost:3000/lists", list, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// function deleteListeById(IDListe: string) {
//   return axios.delete("http://localhost:3000/lists/" + IDListe);
// }

export default {
  fetchListe,
  // addListe,
  // deleteListeById,
};
