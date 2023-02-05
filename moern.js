// Element Selection
//let toggleBtn = document.querySelector(".toggleBtn"); // variable bc will change elements or css atrributes
let mainWrapper = document.querySelector(".mainWrapper");
const main = document.querySelector("main"); //const bc it will maintain its value as main html element selected
let hammy = document.querySelector(".ham");

hammy.addEventListener("click",() =>{
    mainWrapper.classList.toggle("activate");

});