// Definición del objeto libro
const libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    anio: 1605,
    estado: "disponible",
    // Método para describir el libro
    describirLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    // Propiedad opcional para los capítulos
    capitulos: [],
    // Métodos para agregar y eliminar capítulos
    agregarCapitulo: function(capitulo) {
      this.capitulos.push(capitulo);
    },
    eliminarCapitulo: function(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index > -1) {
        this.capitulos.splice(index, 1);
      }
    }
  };
  
  // Uso de los métodos
  libro.describirLibro();  // Descripción del libro
  libro.agregarCapitulo("Capítulo 1: La Mancha");  // Agregar capítulo
  libro.agregarCapitulo("Capítulo 2: El Encuentro con Sancho");  // Agregar otro capítulo
  
  console.log("Capítulos del libro:", libro.capitulos);  // Ver los capítulos
  libro.eliminarCapitulo("Capítulo 1: La Mancha");  // Eliminar un capítulo
  console.log("Capítulos del libro después de eliminar:", libro.capitulos);
  