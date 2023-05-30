import { resultados } from "./api.js";

// & cantidad de personas por Estado

const estadoTbody = document.querySelector("#countEstado tbody");
export const estadostabla = async () => {
  let countEstados = {};
  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countEstados[item.estado]) {
      countEstados[item.estado]++;
    } else {
      countEstados[item.estado] = 1;
    }
  });

  estadoTbody.innerHTML = "";
  Object.entries(countEstados).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
    estadoTbody.innerHTML += `
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    `;
    console.log(estadoTbody);
  });
};