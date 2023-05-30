import { resultados } from "./api.js";

// & cantidad de personas por ciudad
console.log(await resultados());

// & Muestro en HTML
// Cuenta Usuarios por ciudad
const ciudadTbody = document.querySelector("#ciudades tbody");
export const ciudadestabla = async () => {
  
  let countCiudades = {};

  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countCiudades[item.ciudad]) {
      countCiudades[item.ciudad]++;
    } else {
      countCiudades[item.ciudad] = 1;
    }
  });

  ciudadTbody.innerHTML = "";
  Object.entries(countCiudades).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
    ciudadTbody.innerHTML += `
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    `;
    console.log(ciudadTbody);
  });
};
