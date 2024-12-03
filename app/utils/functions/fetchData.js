export const fetchData = async function (url, options) {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  } catch {
    throw new Error();
  }
};
