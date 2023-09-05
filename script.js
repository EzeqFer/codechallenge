document.getElementById('forms').addEventListener('submit', function (e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fechaNacimiento = document.getElementById('fecha_nacimiento').value;

    let formData = {
        nombre: nombre,
        apellido: apellido,
        fecha_nacimiento: fechaNacimiento
    }

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) 
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
       
    })
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
});