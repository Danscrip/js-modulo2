let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing'

let datos = []
let categorias = []








async function getEventos() {


    try {
        const response = await fetch(urlAPI)
        const dataAPI = await response.json()
        console.log(dataAPI);
        //console.log(datos[0].events);





        datos.push(dataAPI)
        console.log(dataAPI.currentDate);
        console.log(dataAPI.events[0].assistance)
        console.log(datos[0].events[0].assistance);
        console.log(dataAPI.events[0].capacity)
        console.log(datos[0].events[0].capacity);
        console.log(dataAPI.events[0].price)
        console.log(datos[0].events[0].price);

        console.log(Math.round((datos[0].events[0].assistance / datos[0].events[0].capacity) * 100));
        console.log(Math.round(datos[0].events[0].price * datos[0].events[0].assistance));






        categorias = extraerCategorias(datos);
        console.log(categorias);
        crearTablaUpcoming(categorias)

        crearTablaPast(categorias)










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

    console.log(categoria);
    return categoria

}

function crearTablaUpcoming(parametro) {
    let time = "2023-03-10"
    const padre2 = document.querySelector(".tabla2>table>tbody")
    let tableBodyHTML = "";
    console.log(padre2);
    for (const element of parametro) {

        console.log(element);

        let categoriasfiltradas = getCategorias(element, datos);
        console.log(categoriasfiltradas);
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
    console.log(datos[0].currentDate);
    return datos[0].events.filter(dato => dato.category.includes(parametro))
}


function getPercentageOfAtendance(parametro) {
    let time = "2023-03-10"
    console.log(parametro);
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
    console.log(padre2);
    for (const element of parametro) {

        console.log(element);

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
    console.log(datos[0].currentDate);
    return datos[0].events.filter(dato => dato.category.includes(parametro))
}


function getPercentageOfAtendancePast(parametro) {
    let time = "2023-03-10"
    console.log(parametro);
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







