window.onload;
const url = window.location.href;   //Capturo la url de la barra de direcciones.
let cadenaRecup = url.split("?")[1]; //Me quedo solo con los parametros que vienen después de "?"

//Limpio todo el string que viene como parámetro. 
cadenaRecup = cadenaRecup.replaceAll("%3C","<");
cadenaRecup = cadenaRecup.replaceAll("%3E",">");
cadenaRecup = cadenaRecup.replaceAll("%20"," ");

cadenaRecup = cadenaRecup.replaceAll("%C3%A9","é");
cadenaRecup = cadenaRecup.replaceAll("%C3%B3","ó");
cadenaRecup = cadenaRecup.replaceAll("%20"," ");
cadenaRecup = cadenaRecup.replaceAll("%20"," ");
//Separo datos de la tabla y el Total. 
cadenaRecupNueva = cadenaRecup.split('///');



let encabezados = "<tr><th>Servicio</th><th>Valor</th><th>Cantidad</th><th>Subtotal</th></tr>" + cadenaRecupNueva[0];
let total = "<tr id='total'><td><strong>TOTAL</strong></td><td></td><td></td><td>" + "$" + cadenaRecupNueva[1] + "</td></tr>";
let tablaTerminada = encabezados + total;

//Genero un nro al azar para el prusupuesto y la fecha de hoy. 
let nroPresupuesto = Math.floor(Math.random() * 1000);
let fecha = (new Date()).toLocaleDateString();

//Me aseguro que el cliente haya elegido al menos un item de la página presupuesto. 
if (cadenaRecup.length > 15){
    document.querySelector('#texto_alternativo').style.display = 'none';
    document.querySelector("#nro_presupuesto").innerHTML = "Presupuesto Nro: " + nroPresupuesto.toString();
    document.querySelector("#fecha_hoy").innerHTML = fecha;
    document.querySelector("#tablaNueva").innerHTML = tablaTerminada;
}else{
    document.querySelector('#enviar').style.display = 'none';
}

if (cadenaRecupNueva[2] < 4){
    document.querySelector("footer").style.marginTop = "150px";
}





