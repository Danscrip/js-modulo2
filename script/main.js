var a=7
var b=3

function sumar(a,b){
    return a+b;
}
console.log(sumar(a,b))
var a=9;
var b=5;
sumar(a,b);

console.log(sumar(a,b))
let mentor = {
    nombre: "homer",
    apellido:"Gelves",
    edad: 21,
    hambre: true
}

mentor.altura = 179

 for(let clave in mentor){
     console.log("la clave de esta propiedad es: "+ clave);
     console.log("el valor de esta propiedad es: "+mentor[clave]);
}


