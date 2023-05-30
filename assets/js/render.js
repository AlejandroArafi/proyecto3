export const render = (resultados, tbody)=>{

    resultados.forEach((resultado) => {
        const tr = document.createElement("tr");
        const tdImagen = document.createElement("td");
        const img = document.createElement("img");
        const tdNombre = document.createElement("td");
        const tdApellido = document.createElement("td");
        const tdEdad = document.createElement("td");
        const tdGenero = document.createElement("td");
        const tdPais = document.createElement("td");
        const tdCiudad = document.createElement("td");
        const tdEstado = document.createElement("td");
      
        img.src = resultado.imagen;
        tdImagen.appendChild(img);
        tdNombre.textContent = resultado.nombre;
        tdApellido.textContent = resultado.apellido;
        tdEdad.textContent = resultado.edad;
        tdGenero.textContent = resultado.genero;
        tdPais.textContent = resultado.pais;
        tdCiudad.textContent = resultado.ciudad;
        tdEstado.textContent = resultado.estado;
      
        tr.appendChild(tdImagen);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdEdad);
        tr.appendChild(tdGenero);
        tr.appendChild(tdPais);
        tr.appendChild(tdCiudad);
        tr.appendChild(tdEstado);
        tbody.appendChild(tr);
      });




}

