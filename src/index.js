import style from "./style.css";
// Importamos el logo 
import logo from "./assets/favicon.png";

// Lo introducimos en el documento html
document.getElementById("app").innerHTML= `<img src= "${logo}" alt="favicon">`;

const saludo = "Hola esta es una prueba de como transpila codigo webpack";
console.log("saludo");



const arr = [1,2,3];
codeEsNext = () => console.log(...arr);

codeEsNext();


