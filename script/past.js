let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing'

let datos = []
let catern = []
let categorias = []
console.log(categorias);
let checkboxSeleccionados = [];
let coincidenciasArray = []
let busqueda = document.querySelector(".form")
console.log(busqueda);
let checkboxButtons;
let textoBusqueda = busqueda.value;

async function getEventos() {


  try {
    const response = await fetch(urlAPI)
    const dataAPI = await response.json()
    console.log(dataAPI);
    //console.log(datos[0].events);





    datos.push(dataAPI)
    console.log(dataAPI.events)
    console.log(datos);




    crearCartas(datos)


    categorias = extraerCategorias(datos);
    console.log(categorias);
    checkboxesrender(categorias)

    checkboxButtons = document.querySelectorAll("input[type=checkbox]");



    console.log(checkboxButtons);

    checkboxButtons.forEach(checkbox => checkbox.addEventListener("change", () => {
      renderCheck();

    }));

   // makecards (datos[0].events)




    logic(datos)
    consul(datos)
  } catch (error) {
    console.log(error.message)
  }
}

getEventos();


busqueda.addEventListener('submit', (e) => {
  e.preventDefault()



  listita(datos , [busqueda[0].value])



})


function consul(arr) {
  console.log(arr[0].events)

}



//console.log(dataAPI)
function logic(dato) {

  console.log(dato[0].events)

}


 








function crearCartas(datos) {



  const time = datos[0].currentDate



  let lista = document.getElementById("contenedor")
  let clone = document.getElementById("card").content
  lista.innerHTML = ""

  const fragment = document.createDocumentFragment()
  for (let task of datos[0].events) {
    if (time > task.date) {

      clone.querySelector('.card-title').textContent = task.name

      clone.querySelector('.categorys').textContent = task.category
      clone.querySelector('.card-text').textContent = task.description
      clone.querySelector('img').setAttribute('src', task.image)
      clone.querySelector('a').setAttribute('href', `details.html?id=${task._id}`)
      const impostores = clone.cloneNode(true)



      fragment.appendChild(impostores)


    }


  }
  lista.appendChild(fragment)
}


function extraerCategorias(parametro) {
  let categoria = [];

  //let time = parametro[0].currentDate
  for (const cate of parametro[0].events) {

    if (!categoria.includes(cate.category)) {
      categoria.push(cate.category);

    }

  }

  console.log(categoria);
  return categoria

}

//console.log(categorias)
///return categorias


// if (time<cate.date)
// categorias.push(cate.category)
//console.log(categorias);



function checkboxesrender(categorias) {
  let lista = document.querySelector('.boxes')
  let clone = document.getElementById("clone").content


  lista.innerHTML = ""
  const fragment = document.createDocumentFragment()
  for (const capo of categorias) {

    clone.querySelector("input[type=checkbox]").setAttribute('value', `${capo}`)
    clone.querySelector("label").innerHTML = capo


    let impostor = clone.cloneNode(true)
    fragment.appendChild(impostor)
  }


  lista.appendChild(fragment)
}





function getChequeados() {
  let chequeados = [];

  for (const checkbox of checkboxButtons) {
    if (checkbox.checked) {
      chequeados.push(checkbox.value)
      console.log(chequeados);
    }
  }
  //checkboxButtons.forEach(checkbox => {
  //if (checkbox.chequed) {
  //chequeados.push(checkbox.value)
  //}
  //}
  //)
  console.log(chequeados);
  return chequeados;


}

//datos
//categorias
function renderSearch() {
  console.log(datos[0].events);
    
 

  let tiposChequeados = getChequeados();
  
  let resultados =datos[0].events;  //  datos[0].events.filter(pokemon => pokemon.name.includes(textoBusqueda));
    
  if (tiposChequeados.length > 0) {
      resultados = resultados.filter(pokemon => {
          //forma 1
          // let pasaFiltro = false;
          // pokemon.types.forEach(tipo => {
          //     if (tiposChequeados.includes(tipo)) {
          //         pasaFiltro = true;
          //     }
          // });
          // return pasaFiltro;
          return tiposChequeados.some(tipo => pokemon.category.includes(tipo));
      })

  
}
console.log(resultados);
makeSearch(resultados)
}




function renderCheck() {
  console.log(datos[0].events);
    
  let textoBusqueda = busqueda.value;

  let tiposChequeados = getChequeados();
  
  let resultados =datos[0].events;  //  datos[0].events.filter(pokemon => pokemon.name.includes(textoBusqueda));
    
  if (tiposChequeados.length > 0) {
      resultados = resultados.filter(pokemon => {
          //forma 1
          // let pasaFiltro = false;
          // pokemon.types.forEach(tipo => {
          //     if (tiposChequeados.includes(tipo)) {
          //         pasaFiltro = true;
          //     }
          // });
          // return pasaFiltro;
          return tiposChequeados.some(tipo => pokemon.category.includes(tipo));
      })

  
}
console.log(resultados);
makeSearch(resultados)
}





let colecCard = []
function listita(arreglo , amaneceHermoso){
console.log(arreglo);
  console.log(amaneceHermoso);
 if(amaneceHermoso.length===0){


  renderSearch(colecCard)
  sim("mandalorian")
 }else{

 
 colecCard = []
 arreglo[0].events.forEach( element =>{
 for (const valor of amaneceHermoso) {
  if(valor.toLowerCase()==element.name.toLowerCase()||valor.toLowerCase()==element.category.toLowerCase()||/*valor.toLowerCase()==*/element.description.toLowerCase().includes(valor.toLowerCase())){
   
   console.log(element.description);
   colecCard.push(element)
  
    //crearCartas2(datos)
    //sim(colecCard)

//sim(colecCard)

console.log("funciona if")

console.log(colecCard);

  }
  
 } }  )
 
}
console.log(colecCard);
 makeSearch(colecCard)
}

function makeSearch(arr  ) {
  console.log(arr);
  
  let currentDate= "2022-01-01";
  let time = currentDate;
  
  
  
  
    let lista = document.getElementById("contenedor")
  let clone = document.getElementById("card").content
    lista.innerHTML = ""
    
    const fragment = document.createDocumentFragment()
    for (let task of arr) {
      if ( time>task.date)/*&&e.target. id==task.category )*/{
        console.log(task._id)
      clone.querySelector('.card-title').textContent = task.name
      clone.querySelector('.categorys').textContent = task.category
      clone.querySelector('.card-text').textContent = task.description
      clone.querySelector('img').setAttribute('src', task.image)
      clone.querySelector('a').setAttribute('href', `details.html?id=${task._id}` )
      const impostores = clone.cloneNode(true)
  
  
  
      fragment.appendChild(impostores)
  
  
       } 
      
  
    }
    lista.appendChild(fragment)
  }
  


