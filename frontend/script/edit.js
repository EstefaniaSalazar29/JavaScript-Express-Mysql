const tabla = document.querySelector('#datos-vehiculo tbody')
const edit = document.getElementById('editar')


function cargarU(){
    fetch('http://localhost:3000/vehiculos')
    .then(respuesta => respuesta.json())
    .then(vehiculos => {
        vehiculos.forEach(vehiculo => {
            const row = document.createElement('tr')
            row.innerHTML += `
            <td>${vehiculo.marca}</td>
            <td>${vehiculo.linea}</td>
            <td>${vehiculo.color}</td>
            <td>${vehiculo.placa}</td>
            `;
            tabla.appendChild(row)
        })
    })
    .catch(error => console.log("Hubo un error"))
}
cargarU();


edit.onclick = function(){
    
}





