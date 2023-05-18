//declaro las variables
const linkApi = "https://randomuser.me/api/";
const qty = 20;
const country = "au";
const dataApi = `${linkApi}?nat=${country}&results=${qty}`;
const inputQty = document.getElementById("qty");

//creo la funcion Fetch Try Catch
const apiLink = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//recupero la los datos de la base de datos
const url = dataApi;
const datos = await apiLink(url);

// !extrae y exporto solo los campos necesarios
export const resultados = datos.results.map((resultado) => {
  return {
    imagen: resultado.picture.thumbnail,
    nombre: resultado.name.first,
    apellido: resultado.name.last,
    edad: resultado.dob.age,
    genero: resultado.gender,
    pais: resultado.location.country,
    ciudad: resultado.location.city,
    estado: resultado.location.state,
  };
});
