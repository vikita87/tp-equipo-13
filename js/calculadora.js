var tabla = ""; 
var suma = 0;
var contador = 0; // Cuenta la cantidad de filas que tendrá la nueva tabla.

function imprimir(fila){
    
    contador = contador + 1; 
    let identificador = "#cantidad"+fila;
    
    //Cambio el estilo del input para confirmar que el click del botón. 
    document.querySelector(identificador).style.backgroundColor = "#817D7D";
    document.querySelector(identificador).style.color = "#E8E8F6";
    
    
    //Compruebo primero que el dato ingresado en cantidad, sea un nro entero positivo. 
    
    if(Number.isInteger(parseFloat(document.querySelector(identificador).value))==false || parseInt(document.querySelector(identificador).value)<=0){
        alert("Esto no es un número válido! \nRecargando Página");
        location. reload();
    }
    
    //Capturo la tabla y me quedo con la fila indicada.
    let cadena = '<tr>'
    let palabra = ''
    let linea = document.getElementsByTagName('tr');
    let dato = linea[fila].innerHTML;
    cadena += dato
    cadena += '</tr>'
    cadena = cadena.split(["\n"])
    
    let cant = document.querySelector(identificador).value;
    cadena.splice(3,1,'<td>' + cant + '</td>'); 
    cadena.splice(4,1,"<td>subTotal</td>"); //Elimino datos del boton y los reemplazo por una palabra cualquiera. 
    
    //Elimino espacios en blanco de cada elemento del Array y los sumo a palabra.
    for (let i = 0; i<cadena.length; i++){
        cadena[i] = cadena[i].trim();
        palabra += cadena[i]
    }
    
    //Limpio el dato precio y lo multiplico por la cantidad para obtener el SubTotal.
    let precio = cadena[2].replace("<td>$","");
    precio = precio.replace("</td>","");
    precio = parseInt(precio) * 1000;
    cant = parseInt(cant);
    subTotal = precio * cant;
    suma += subTotal;
    subTotal = subTotal.toString()
    palabra = palabra.replace("subTotal",'$'+subTotal);
    
    
    //Se arma la tabla solo si el usuario ingresó una cantidad mayor a cero. 
    if(cant > 0){
        
        tabla += palabra;
    }
}

//Abro la página generar_presupuesto y le envío la nueva tabla como parametro junto con El Total. 
function abrirCalc(){
    window.open("../pages/generar_presupuesto.html"+"?"+tabla + "///" + suma.toString() + "///" + contador.toString(), "_self");        
}
