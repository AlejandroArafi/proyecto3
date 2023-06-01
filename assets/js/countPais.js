import { resultados } from "./api.js";

// & cantidad de personas por pais

const paisTbody = document.querySelector("#countPais tbody");
export const paistabla = async () => {
  let countPais = {};
  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countPais[item.pais]) {
      countPais[item.pais]++;
    } else {
      countPais[item.pais] = 1;
    }
  });

  
  paisTbody.innerHTML = "";
  Object.entries(countPais).forEach(([key, value]) => {
    // console.log(key);
    // console.log(value);
    paisTbody.innerHTML += `
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    `;
    // console.log(paisTbody);
  });
};
