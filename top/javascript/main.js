//console.log("Hola Mundo !")

//DOM

/*let container = document.querySelector(".table");
console.log(container);

let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link)
})
console.log(links);

let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    });
});*/

//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link){
    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(evento){
        evento.preventDefault();
        //quitarle las clases de animación
        let content = document.querySelector(".content");
        content.classList.remove("animate__fadeIn");
        content.classList.remove("animate__animated");
        //agregar clases para animar su salida
        content.classList.add("animate__backOutUp");
        content.classList.add("animate__animated");
        //timer
        setTimeout(function(){
            //mover entre documentos
            location.href = "/";
        },600);
        return false;
    });
});