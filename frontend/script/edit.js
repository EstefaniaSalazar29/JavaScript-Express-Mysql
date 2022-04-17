const tabla = document.querySelector("#datos-vehiculo tbody");
const modal = document.getElementById('exampleModal');
let marca = document.getElementById('marca');
let linea = document.getElementById('linea');
let color = document.getElementById('color');
let placa = document.getElementById('placa');
let form = document.getElementById('modalform');


function cargarU() {
  fetch("http://localhost:3000/vehiculos")
    .then((respuesta) => respuesta.json())
    .then((vehiculos) => {
      vehiculos.forEach((vehiculo) => {
        const row = document.createElement("tr");
        row.innerHTML += `
            <td>${vehiculo.marca}</td>
            <td>${vehiculo.linea}</td>
            <td>${vehiculo.color}</td>
            <td>${vehiculo.placa}</td>
            <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever>Editar</button></td>
            <td><button type="submit" class="btn btn-danger d-block mx-auto" id="v_${vehiculo.placa}">Borrar</button></td>
            `;
        tabla.appendChild(row);
      });
    })
    .catch((error) => console.log("Hubo un error"));
}
cargarU();
let body = document.getElementById('body')
body.addEventListener('click', (e)=> {
    let valor = e.target.id
    console.log(valor);
})


// let fila;
// modal.addEventListener('click', (e)=> {
//   let targe = e.target.id
//   fila = document.getElementsByTagName("td");
//   marca= fila[0];
//   linea= fila[1];
//   color= fila[2];
//   placa= fila[3];
//   console.log(linea);
//   form.innerHTML = `<form>
//   <div class="mb-3">
//     <label id="marca" class="col-form-label">Marca</label>
//     <input type="text" class="form-control" id="nombreM" value="${marca}">
//   </div>
//   <div class="mb-3">
//     <label id="linea" class="col-form-label">Linea</label>
//     <input type="text" class="form-control" id="Nomb" value="${linea}">
//   </div>
//   <div class="mb-3">
//     <label id="color" class="col-form-label">Color</label>
//     <input type="text" class="form-control" id="recipient-name" value="${color}">
//   </div>
//   <div class="mb-3">
//     <label id="Placa" class="col-form-label">Placa</label>
//     <input type="text" class="form-control" id="recipient-name" value="${placa}">
//   </div>
// </form>`
// })


borrar.onclick = function(){
  alert('hola')
}


