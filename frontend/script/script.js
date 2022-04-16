const URL = 'http://localhost:3000/vehiculos'
let form = document.getElementById('formu');



form.addEventListener('submit', async(e)=> {
    e.preventDefault();
    let marca = document.getElementById('marca').value;
    let linea = document.getElementById('linea').value;
    let color = document.getElementById('color').value;
    let placa = document.getElementById('placa').value;

    let info = {
        marca: marca,
        linea: linea,
        color: color,
        placa: placa
    }

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(() => {
        window.location.href = 'edit.html';
        
    })
    .catch(() => {
        alert('error')
    })

})

