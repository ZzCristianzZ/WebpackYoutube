import style from "./style.css";
import logo from "./assets/favicon.png";
import rick from "./assets/imagenPrueba.jpg";
import data from "./data.json";
//Importamos el archivo HelloWorld.js
import {HelloWorld} from "./components/HelloWorld.js";



const d = document,
$app = d.getElementById("app"),
$h1 = d.createElement("h1"),
$logo = d.createElement("img"),
$img = d.createElement("img"),
$nav = d.createElement("nav");


let menu = "",
 hello = new HelloWorld("Vanilla JS");
//Creamos la variable 

data.links.forEach((el)=>(menu +=`<a href = "${el[1]}">${el[0]}</a>`));
// Agregamos la variable hello
 $h1.textContent = hello.greet(); 
 $logo.src = logo;
 $logo.classList.add("icon");
 $img.src = rick;
 $nav.innerHTML = menu;
 $nav.classList.add("menu");

 $app.appendChild($h1);
 $app.appendChild($logo);
//  $app.appendChild($img);
 $app.appendChild($nav);

const saludo = "Hola esta es una prueba de como transpila codigo webpack";
console.log("saludo");



const arr = [1,2,3];
codeEsNext = () => console.log(...arr);

codeEsNext();


