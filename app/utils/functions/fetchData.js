export const fetchData = async function (url, options) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Response Fail :  ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
};
