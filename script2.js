document.getElementById('addCommentBtn').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText) {
      const commentDate = new Date();
      const formattedDate = commentDate.toLocaleString(); // Formato de fecha y hora
  
      // Crear el comentario
      const li = document.createElement('li');
      li.innerHTML = `${commentText} <span>(${formattedDate})</span> <button class="deleteBtn">Eliminar</button>`;
  
      // Añadir el comentario a la lista
      document.getElementById('commentsList').appendChild(li);
  
      // Limpiar el campo de texto
      commentInput.value = '';
  
      // Agregar funcionalidad para eliminar el comentario
      li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
      });
    }
  });
  