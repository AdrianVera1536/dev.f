// Obtener referencias a los elementos del DOM
const commentInput = document.getElementById('commentInput');
const addCommentButton = document.getElementById('addCommentButton');
const commentsList = document.getElementById('commentsList');

// Función para agregar un comentario
addCommentButton.addEventListener('click', () => {
  const commentText = commentInput.value.trim();
  
  // Validación: Si el comentario no está vacío
  if (commentText !== '') {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    // Obtener la fecha y hora actual
    const currentDate = new Date();
    const dateStr = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    // Crear el contenido del comentario
    commentElement.innerHTML = `
      <p><strong>Comentario:</strong> ${commentText}</p>
      <p><em>Publicado en: ${dateStr}</em></p>
      <button class="delete-btn">Eliminar</button>
    `;

    // Agregar el comentario al listado de comentarios
    commentsList.appendChild(commentElement);

    // Limpiar el campo de texto
    commentInput.value = '';

    // Agregar funcionalidad al botón de eliminar
    const deleteButton = commentElement.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
      commentsList.removeChild(commentElement);
    });
  }
});
