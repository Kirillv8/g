export const getGenderByName = async (name) => {
  const currentName = name.trim();
  const API_URL = import.meta.env.VITE_GENDERIZE_API_URL;
  const url = `${API_URL}?name=${currentName}`;

  if (!currentName) return null;

  try {
    const respose = await fetch(url);

    if (!respose.ok) {
      throw Error(`Ошибка запроса status - ${respose.status}`);
    }
    const data = await respose.json();
    console.log(data.gender);

    return data.gender;
  } catch (error) {
    console.error(error.message);
  }
};
