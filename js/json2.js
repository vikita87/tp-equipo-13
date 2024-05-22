let original = document.querySelector("#maqueta");
let contenedor = document.querySelector("#cajadetecnicos");

let botonAgregar = document.querySelector("#mostrar");
let botonQuitar = document.querySelector("#ocultar");

let referencia = original.cloneNode(true);

original.remove();

let hombres = 3;
let mujeres = 3;


function AgregarTecnico() {
       
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
        
        /* FILTRADO POR PAISES.
        let lista_paises =["Spain","Mexico","United States","Canada","New Zealand"];
        let pais = data.results[0].location.country;
        
        if (lista_paises.includes(pais)){
            let gender = data.results[0].gender;
            filtrar_genero(gender,data);
        } else {
            AgregarTecnico();
        }   
        
        let gender = data.results[0].gender;
        filtrar_genero(gender,data);
        */
       
        let genero = data.results[0].gender;
        if (genero == 'male' && hombres >0){
            hombres --;
            agregar_persona(data);
        } else if (genero == 'female' && mujeres >0){
            mujeres --;
            agregar_persona(data);
        } else if (hombres + mujeres >= 1){
            AgregarTecnico();
        } else {
            document.querySelector("#mostrar").style.display = "none"; 
        }

        }
    )
    .catch(error => console.log("Ocurrió un error! " + error));
}

/*

function filtrar_genero(genero,data){
    
    if (genero == 'male' && hombres >0){
        hombres --;
        agregar_persona(data);
    } else if (genero == 'female' && mujeres >0){
        mujeres --;
        agregar_persona(data);
    } else if (hombres + mujeres >= 1){
        AgregarTecnico();
    } else {
        document.querySelector("#mostrar").style.display = "none"; 
    }
    
}
*/

function agregar_persona(data){
    
    let nuevaPersona = referencia.cloneNode(true);
    
    nuevaPersona.querySelector("img").src = data.results[0].picture.large;
    nuevaPersona.querySelector("img").alt = "Foto CV";
    nuevaPersona.querySelector("p").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    contenedor.appendChild(nuevaPersona);
        
}

function QuitarTecnico() {
    
    if(contenedor.childElementCount > 0){
        if (contenedor.lastElementChild.innerHTML.includes('/men/')){
            hombres ++;
            document.querySelector("#mostrar").style.display = "inline-block";
        } else if (contenedor.lastElementChild.innerHTML.includes('/women/')){
            mujeres ++;
            document.querySelector("#mostrar").style.display = "inline-block";
        }
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
