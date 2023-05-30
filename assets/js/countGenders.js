import { resultados } from "./api.js";

// & cantidad de personas por ciudad
console.log(await resultados());

// & Muestro en HTML
// Cuenta Usuarios por genero
const gendersTbody = document.querySelector("#genero tbody");
export const genderstabla = async () => {
  let countGenders = {};
  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countGenders[item.genero]) {
      countGenders[item.genero]++;
    } else {
      countGenders[item.genero] = 1;
    }
  });

  gendersTbody.innerHTML = "";
  Object.entries(countGenders).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
    gendersTbody.innerHTML += `
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    `;
    console.log(gendersTbody);
  });
};
