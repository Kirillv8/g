export const getGenderByName = async () => {
  const API_URL = import.meta.env.VITE_GENDERIZE_API_URL;
  try {
    const respose = await fetch(API_URL);

    if (!respose.ok) {
      throw Error(`Ошибка запроса status - ${respose.status}`);
    }
    const data = await respose.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
