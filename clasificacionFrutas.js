// Declara un arreglo con varios tipos de frutas.
let frutas = ["manzana", "plátano", "manzana", "naranja", "plátano", "uva", "manzana", "uva"];

// Creamos un objeto para almacenar la cantidad de cada tipo de fruta.
let clasificacion = {};

// Usamos un ciclo for para recorrer el arreglo y contar las frutas.
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya está en el objeto, incrementamos su cantidad.
    if (clasificacion[fruta]) {
        clasificacion[fruta]++;
    } else {
        // Si no está, la añadimos con cantidad 1.
        clasificacion[fruta] = 1;
    }
}

// Imprimimos la cantidad de cada tipo de fruta en la consola.
console.log(clasificacion);
