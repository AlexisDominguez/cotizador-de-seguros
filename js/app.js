class Seguro{
   constructor(){

   }
}

const añoMax = new Date().getFullYear(),
      añoMin = añoMax - 20;

const selectAños = document.getElementById("anio");


for(let i = añoMax; i >= añoMin; i-- ){
   let opcion = document.createElement("option");  
   opcion.setAttribute("value", i);
   opcion.appendChild(document.createTextNode(i));
   selectAños.appendChild(opcion);
}
