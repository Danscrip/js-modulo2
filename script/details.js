
let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing'

let datos = []



async function getEventos() {


  try {
    const response = await fetch(urlAPI)
    const dataAPI = await response.json()
    console.log(dataAPI);
    //console.log(datos[0].events);
datos.push(dataAPI)
    console.log(dataAPI.events)
    //console.log(datos[0].events);

    //console.log(data.events[0].name)
    console.log([document])
    
    const queryString = location.search
    
    const params = new URLSearchParams(queryString)
    
    
    console.log(location.search)
    
    const id = params.get("id")
    console.log(id)
    //const tasks = data.events.find(cartel => cartel._id == id)
    
    for (const tasks of dataAPI.events) {
      if(tasks._id == id){
         let lista = document.getElementById("contenedor")
    console.log(lista)
    let clone = document.getElementById("card").content
    console.log(clone)
    clone.querySelector('.name').textContent=`name: ${tasks.name}`
    
    clone.querySelector('.date').textContent =  `date: ${tasks.date}`
    console.log(document.querySelector('.name'))
    clone.querySelector('.place').textContent =   `place: ${tasks.place}`
    clone.querySelector('.capacity').textContent = `capacity: ${tasks.capacity }`
    clone.querySelector('.assistance').textContent =  `assistance: ${tasks.assistance}`
    clone.querySelector('.price').textContent =  `price: u$s ${tasks.price}`
    clone.querySelector('.category').textContent =  `category: ${tasks.category}`
    
    clone.querySelector('.description').textContent =  `description: ${tasks.description}`
    
    clone.querySelector('img').setAttribute('src',  tasks.image )
    
    const impostores = clone.cloneNode(true)
    lista.appendChild(impostores)}
     
    }


    




    
  } catch (error) {
    console.log(error.message)
  }
}

getEventos();










