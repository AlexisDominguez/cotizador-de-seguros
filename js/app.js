// Clase Seguro
class Seguro{
   constructor(marca, año, tipo){
      this.marca = marca;
      this.año = año;
      this.tipo = tipo;
   }
}

//Clase interfaz
class Interfaz{

   // Se encarga de obtener y definir el tipo de mensaje
   // y también mostrarlo en pantalla
   mostrarMensaje(mensaje, tipo){
      //Crea un <div>
      const div = document.createElement("div")

      // Comprueba si el tipo de mensaje es igual a error
      if(tipo === "error"){
         div.classList.add("error", "mensaje");
      }else{
         div.classList.add("correcto", "mensaje");
      }
      div.innerHTML = mensaje;
      // Inserta al div creado dentro del formulario justo antes
      // del primer .form-group
      cotizarSeguroFormulario.insertBefore(div, document.querySelector(".form-group"));
      
      // Elimina el mensaje después de 3 segundos
      /* setTimeout(function(){
         document.querySelector(".mensaje").remove();
      },3000); */
   }
}


// Se encarga de obtener la fecha
const añoMax = new Date().getFullYear(),
      // añoMin es igual a 20 años antes al año actual
      añoMin = añoMax - 20;

// Selecciona el <select> "año" del documento
const selectAños = document.getElementById("anio");

// Este for se encarga de mostrar todos los años dentro del <select>
// iniciando desde el año actual, hasta el año actual -20, es decir
// desde el año 2020 hasta el año 2000
for(let i = añoMax; i >= añoMin; i-- ){
   let opcion = document.createElement("option");  // Crea un elemento <option>
   opcion.setAttribute("value", i);                // Define el valor del atributo igual al año recorrido del for
   opcion.appendChild(document.createTextNode(i)); // Define el texto interno del <option> igual al año recorrido del for
   selectAños.appendChild(opcion);                 // Agrega el <option> al <select> en el DOM
}

// Event Listener's
const cotizarSeguroFormulario = document.getElementById("cotizar-seguro");
cotizarSeguroFormulario.addEventListener("submit", enviarFormulario);

//Se encarga de procesar el formulario al enviarlo
function enviarFormulario(e){
   e.preventDefault();

   // Leer la marca seleccionada en el formulario
   const marca = document.getElementById("marca");
   const marcaSeleccionada = marca.options[marca.selectedIndex].value;

   // Leer el año seleccionado en el formulario
   const año = document.getElementById("anio");
   const añoSeleccionado =año.options[año.selectedIndex].value;

   // Leer el radio button seleccinado en el formulario
   const tipoSeguro = document.querySelector("input[name='tipo']:checked").value;

   // Instancia de la clase Interfaz
   const interfaz = new Interfaz();

   // Comprueba que no haya campos vacios o sin seleccionar
   if(marcaSeleccionada === "" || añoSeleccionado === "" || tipoSeguro === ""){
      // Muestra una interfaz de error cuando algún campo se encuentra vacío
      interfaz.mostrarMensaje("FALTAN DATOS <br> Revisa el formulario y vuelve a intentarlo.", "error");
   }else{
      // [!!!] FUTURO MENSAJE EN INSTANCIA DE INTERFAZ
      console.log("Todo correcto");
   }
   
}