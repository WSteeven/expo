//Si la variable no se declara mediante el operador var/const/let, 
//automaticamente se crea una variable global con ese identificador y su valor

/////////////////////////////////////////
/*function mostrar(){
    var mensaje = "Hola a todos, cómo están?";
}

mostrar();
console.log(mensaje);*/

////////////var
/*
// variable global
var mensaje = "Mensaje de prueba";

function mostrar(){
    var mensaje="Estamos dentro de una funcion";
    console.log(mensaje);
}

console.log(mensaje);
mostrar();
console.log(mensaje);
*/

///tipos de datos
//tipos primitivos
var v1 = 7;
console.log(typeof v1);
var v2 = "cadena de caracteres";
console.log(typeof v2);
var v3 = false;
console.log(typeof v3);
var v4;
console.log(typeof v4);
var v5 = null;
console.log(typeof v5);
var v6 = new Number(43.1233445223);
console.log(typeof v6 +"\n"+v6.toFixed(3));
var fecha = new Date();
console.log(fecha);
function suma(a, b){
    return a+b;
}
console.log(suma(5, 4));


var vocales = ['a', 'b', 'c', 'd', 'e'];
console.log(vocales.length);
console.log(typeof vocales);