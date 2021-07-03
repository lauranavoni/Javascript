/*Comentarios en Bloque
alert('mi proyecto desde cero');
alert('Probando alert 1');
alert('Probando alert 2');
alert('Probando alert 3');
alert('Probando alert 4');
*/

//Variables (pueden cambiar su valor)
//no pueden comenzar en un numero, pero si tengo q respetar el orden en mayusculas y minusculas=Casesensitive
//crear estructuras de datos, es un objeto
//tengo q saber la utilidad de datos, me permite guardar un valor q puede ser modificado

var nombre ='laura';
alert(nombre);

//console.log(nombre);

const nombre1='Maria';
alert('Alumna IT: '+ nombre1);

//const(no pueden cambiar su valor)
//error! intento asignar un mismo valor a una constante
/*
const nombre1='Juan';
alert('Alumno IT: '+ nombre1);*/

var edad;
edad = 34; // tipo number
alert('edad = '+ edad);
edad = 'Pedro' //tipo string
alert('edad = '+ edad);
edad = true //tipo boolean
alert('edad = '+ edad);
edad = 125.6
alert('edad = '+ edad);

//tipado dinamico, el estado de las variables va cambiando

var apellido ='Navoni';
document.write('tipado dinamico en JS');
