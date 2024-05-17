let original = document.querySelector("#maqueta");
let contenedor = document.querySelector("#cajadetecnicos");

let botonAgregar = document.querySelector("#mostrar");
let botonQuitar = document.querySelector("#ocultar");

let referencia = original.cloneNode(true);

original.remove();

function AgregarTecnico() {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {    
        console.log(data.results[0].name.first + " " + data.results[0].name.last);
    
        console.log(data.results[0].picture.large);
    
        let nuevaPersona = referencia.cloneNode(true);
    
        nuevaPersona.querySelector("img").src = data.results[0].picture.large;
        nuevaPersona.querySelector("img").alt = "Foto CV";
        nuevaPersona.querySelector("p").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    
        contenedor.appendChild(nuevaPersona);
        })
    .catch(error => console.log("Ocurrió un error! " + error));
}

function QuitarTecnico() {
    if(contenedor.childElementCount > 0){
        contenedor.removeChild(contenedor.lastChild);
    }
}

// Eventos
botonAgregar.addEventListener("click", function(){
    AgregarTecnico();
});

botonQuitar.addEventListener("click", function(){
    QuitarTecnico();
});
