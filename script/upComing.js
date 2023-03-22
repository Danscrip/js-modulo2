let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing'

let  datos = []
let catern =[]
let categorias =[]
let checkboxButtons=[]
let checkboxSeleccionados = [];
let coincidenciasArray = []

async function getEventos (){
   

    try {
        const response = await fetch(urlAPI)
        const dataAPI = await response.json()
console.log(dataAPI);
console.log(datos);
       
      
    


        datos.push(dataAPI)
                  console.log(dataAPI.events)
                  console.log(datos[0].events)
        



        crearCartas(datos)
        
        
  categorias = extraerCategorias(datos);
        
checkboxesrender(categorias)


      
        logic(datos)
        consul (datos)
    } catch (error) {
        console.log(error.message)
    }
}

getEventos();



  function consul (arr){
    console.log(arr[0].events)
    
  }



//console.log(dataAPI)
function logic (dato){
   
    console.log(dato[0].events)
    
    }


    function crearCartas(datos ) {



        const time = datos[0].currentDate
        console.log(datos[0])
        
        
          let lista = document.getElementById("contenedor")
        let clone = document.getElementById("card").content
          lista.innerHTML = ""
          
          const fragment = document.createDocumentFragment()
          for (let task of datos[0].events) {
            if ( time<task.date){
               
            clone.querySelector('.card-title').textContent = task.name
            clone.querySelector('.categorys').textContent = task.category
            clone.querySelector('.card-text').textContent = task.description
            clone.querySelector('img').setAttribute('src', task.image)
            clone.querySelector('a').setAttribute('href', `details.html?id=${task._id}` )
            const impostores = clone.cloneNode(true)
        
        
        {}
            fragment.appendChild(impostores)
        
        
             } let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing'

             let  datos = []
             let catern =[]
             let categorias =[]
             let checkboxButtons=[]
             let checkboxSeleccionados = [];
             let coincidenciasArray = []
             
             async function getEventos (){
                
             
                 try {
                     const response = await fetch(urlAPI)
                     const dataAPI = await response.json()
             console.log(dataAPI);
             console.log(datos);
                    
                   
                 
             
             
                     datos.push(dataAPI)
                               console.log(dataAPI.events)
                               console.log(datos[0].events)
                     
             
             
             
                     crearCartas(datos)
                     
                     
               categorias = extraerCategorias(datos);
                     
             checkboxesrender(categorias)
             
             
                   
                     logic(datos)
                     consul (datos)
                 } catch (error) {
                     console.log(error.message)
                 }
             }
             
             getEventos();
             
             
             
               function consul (arr){
                 console.log(arr[0].events)
                 
               }
             
             
             
             //console.log(dataAPI)
             function logic (dato){
                
                 console.log(dato[0].events)
                 
                 }
             
             
                 function crearCartas(datos ) {
             
             
             
                     const time = datos[0].currentDate
                     console.log(datos[0])
                     
                     
                       let lista = document.getElementById("contenedor")
                     let clone = document.getElementById("card").content
                       lista.innerHTML = ""
                       
                       const fragment = document.createDocumentFragment()
                       for (let task of datos[0].events) {
                         if ( time<task.date){
                            
                         clone.querySelector('.card-title').textContent = task.name
                         clone.querySelector('.categorys').textContent = task.category
                         clone.querySelector('.card-text').textContent = task.description
                         clone.querySelector('img').setAttribute('src', task.image)
                         clone.querySelector('a').setAttribute('href', `details.html?id=${task._id}` )
                         const impostores = clone.cloneNode(true)
                     
                     
                     {}
                         fragment.appendChild(impostores)
                     
                     
                          } 
                         
                     
                       }
                       lista.appendChild(fragment)
                     }
             
                     
             function extraerCategorias(parametro){
             let categoria = [];
             
             //let time = parametro[0].currentDate
             for (const cate of parametro[0].events) {
              
                if ( !categoria.includes(cate.category) ){
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
             
             
             
            
        
          }
          lista.appendChild(fragment)
        }

        
function extraerCategorias(parametro){
let categoria = [];

//let time = parametro[0].currentDate
for (const cate of parametro[0].events) {
 
   if ( !categoria.includes(cate.category) ){
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






























