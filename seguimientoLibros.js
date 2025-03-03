// Definimos el arreglo de libros leídos
let librosLeidos = [];

// Función para agregar un libro al arreglo
function agregarLibro(titulo) {
    librosLeidos.push(titulo);  // Añadimos el libro al arreglo
    console.log(`Libro "${titulo}" agregado.`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros Leídos:");
    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro aún.");
    } else {
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}

// Ejemplo de uso:
agregarLibro("Cien años de soledad");
agregarLibro("1984");
agregarLibro("El señor de los anillos");

mostrarLibrosLeidos();
