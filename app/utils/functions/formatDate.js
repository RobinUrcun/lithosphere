export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Les mois commencent à 0, donc on ajoute 1
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
};
