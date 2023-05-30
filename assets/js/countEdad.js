import { resultados } from "./api.js";

// & cantidad de personas por edad

const edadTbody = document.querySelector("#countEdad tbody");
export const edadtabla = async () => {
  let countEdades = {};
  const qtypersonas = await resultados();
  qtypersonas.forEach((item) => {
    if (countEdades[item.edad]) {
      countEdades[item.edad]++;
    } else {
      countEdades[item.edad] = 1;
    }
  });

  edadTbody.innerHTML = "";
  Object.entries(countEdades).forEach(([key, value]) => {
    console.log(key);
    console.log(value);
    edadTbody.innerHTML += `
    <tr>
    <td>${key}</td>
    <td>${value}</td>
    </tr>
    `;
    console.log(edadTbody);
  });
};
