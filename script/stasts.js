let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing'

let datos = []
let categorias = []
let acumulador = [];
let acumuladorattendance = [];
let acumuladorcapacity = [];







async function getEventos() {


    try {
        const response = await fetch(urlAPI)
        const dataAPI = await response.json()
        console.log(dataAPI);
        //console.log(datos[0].events);





        datos.push(dataAPI)
       
       






        categorias = extraerCategorias(datos);
      
        crearTablaUpcoming(categorias)

        crearTablaPast(categorias)

        crearTablaEvents(categorias)







    } catch (error) {
        console.log(error.message)
    }
}

getEventos();


function extraerCategorias(parametro) {
    let categoria = [];

    //let time = parametro[0].currentDate
    for (const cate of parametro[0].events) {

        if (!categoria.includes(cate.category)) {
            categoria.push(cate.category);

        }

    }

   
    return categoria

}

function crearTablaUpcoming(parametro) {
    let time = "2023-03-10"
    const padre2 = document.querySelector(".tabla2>table>tbody")
    let tableBodyHTML = "";
    
    for (const element of parametro) {

       

        let categoriasfiltradas = getCategorias(element, datos);
        
        let promedio = getPercentageOfAtendance(categoriasfiltradas);
        let masGrande = getRevenues(categoriasfiltradas);
        // let masChico = getChico(categoriasfiltradas);
        tableBodyHTML += `<tr>
    <td>${element}</td>
    <td> ${"u$s"}  ${masGrande} </td>
     <td>${promedio} ${"%"}</td>
</tr>`;


    }
    //parametro.forEach(element => {});
    padre2.innerHTML = tableBodyHTML;
}


function getCategorias(parametro, datos) {
    let time = "2023-03-10"
   
    return datos[0].events.filter(dato => dato.category.includes(parametro))
}


function getPercentageOfAtendance(parametro) {
    let time = "2023-03-10"
   
    let sumaAlturas = 0;
    for (const sumatoria of parametro) {
        if (datos[0].currentDate < sumatoria.date) {
            return Math.round((sumatoria.assistance / sumatoria.capacity) * 100)

        }

    }


}
function getRevenues(parametro) {
    let time = "2023-03-10"

    for (const sumatoria of parametro) {
        if (datos[0].currentDate < sumatoria.date) {
            return Math.round((sumatoria.price * sumatoria.assistance))

        }


    }
    // parametro.forEach(sumatoria =>);
}


function crearTablaPast(parametro) {
    let time = "2023-03-10"
    const padre2 = document.querySelector(".tabla3>table>tbody")
    let tableBodyHTML = "";
    
    for (const element of parametro) {

        

        let categoriasfiltradasP = getCategoriasPast(element, datos);
        console.log(categoriasfiltradasP);
        let promedioP = getPercentageOfAtendancePast(categoriasfiltradasP);
        let masGrandeP = getRevenuesPast(categoriasfiltradasP);
        // let masChico = getChico(categoriasfiltradas);
        tableBodyHTML += `<tr>
    <td>${element}</td>
    <td> ${"u$s"}  ${masGrandeP} </td>
     <td>${promedioP} ${"%"}</td>
</tr>`;


    }
    //parametro.forEach(element => {});
    padre2.innerHTML = tableBodyHTML;
}


function getCategoriasPast(parametro, datos) {
    let time = "2023-03-10"
    
    return datos[0].events.filter(dato => dato.category.includes(parametro))
}


function getPercentageOfAtendancePast(parametro) {
    let time = "2023-03-10"
  
    let sumaAlturas = 0;
    for (const sumatoria of parametro) {
        if (datos[0].currentDate > sumatoria.date) {
            return Math.round((sumatoria.assistance / sumatoria.capacity) * 100)

        }

    }


}
function getRevenuesPast(parametro) {
    let time = "2023-03-10"

    for (const sumatoria of parametro) {
        if (datos[0].currentDate > sumatoria.date) {
            return Math.round((sumatoria.price * sumatoria.assistance))

        }


    }
    // parametro.forEach(sumatoria =>);
}

function crearTablaEvents(parametro) {
    let time = "2023-03-10"
    const padre2 = document.querySelector(".tabla1>table>tbody")
    let tableBodyHTML = "";
   


    let attendancePorce = getAttendance(datos)
    let eventCapacity = getCapacity(datos)
    let categoriasfiltradas = getCategoriasEvents(parametro, datos);
   





    let promedioMax = getMaxPercentageOfAtendanceEvents(attendancePorce);
    
    let promedioMin = getMinPercentageOfAtendanceEvents(attendancePorce);
    let masCapacity = getCapacityEvents(eventCapacity);
    // let masChico = getChico(categoriasfiltradas);
    tableBodyHTML += `<tr>
<td>${promedioMax} ${"%"}</td>
<td> ${promedioMin} ${"%"} </td>
 <td>  ${masCapacity}</td>
</tr>`;

    //parametro.forEach(element => {});
    padre2.innerHTML = tableBodyHTML;
}


function getCategoriasEvents(parametro, datos) {
    let time = "2023-03-10"
   
    return datos[0].events.filter(dato => dato.category.includes(parametro))
}



function getMaxPercentage(parametro) {
    let time = "2023-03-10"


    console.log(parametro);
    let sumaAlturas = 0;



    acumulador.push((sumatoria.assistance / sumatoria.capacity) * 100)






    console.log(acumulador);


}

function getMaxPercentageOfAtendanceEvents(parametro) {
  

    
 
 return Math.max.apply(null, parametro)

    
   
}

function getMinPercentageOfAtendanceEvents(parametro) {
    
    
 return Math.min.apply(null, parametro)


}


function getCapacityEvents(parametro) {
    
     
   return Math.max.apply(null, parametro)

}
function getAttendance(datos) {
for (const iterator of datos[0].events) {
if (datos[0].currentDate>iterator.date) {
     acumuladorattendance.push(Math.round((iterator.assistance / iterator.capacity) * 100))
}

   
}

return acumuladorattendance;
}
  function getCapacity(datos){


for (const iterator of datos[0].events) {
    let nombre = iterator.name
    acumuladorcapacity.push(   iterator.capacity )
    
}

return acumuladorcapacity;

}





