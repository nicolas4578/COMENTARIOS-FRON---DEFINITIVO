import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';  // Importar SweetAlert2

// Crear contexto
const ComentariosContexto = createContext();

// Crear provider: para que el contexto
// se reconozca en todo componente
export const ComentariosProvider = ({ children }) => {

  const [comments, setComments] = useState([]);
  // Estado global de carga
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComentarios();
  }, []);

  /* Función para traer los comentarios
  desde json server */
  const fetchComentarios = async () => {
    const response = await fetch('http://localhost:5000/comentarios');
    const comentariosAPI = await response.json();
    setComments(comentariosAPI);
    setIsLoading(false);
  };

  const addItem = async (newComentario) => {
    try {
      const response = await fetch('http://localhost:5000/comentarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComentario),
      });

      const data = await response.json();
      setComments([data, ...comments]);
      Swal.fire({
        icon: 'success',
        title: 'Comentario añadido',
        text: '¡Tu comentario ha sido añadido con éxito!',
        timer:5000,
        showConfirmButton:false
      });
    } catch (error) {
      console.error('Error al añadir el comentario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al añadir el comentario. Inténtalo de nuevo.',
        confirmButtonText: 'Cerrar',
      });
    }
  };

  const borrarItem = async (id) => {
    if (window.confirm("¿Estás seguro que quieres borrar el comentario?")) {
      const response = await fetch(`http://localhost:5000/comentarios/${id}`, {
        method: 'DELETE',
      });

      // Asignar nuevo estado a comments
      // filter: para quitar los comentarios
      // cuyo id concuerde con el parámetro id
      setComments(comments.filter((c) => c.id !== id));
    }
  };

  return (
    <ComentariosContexto.Provider
      value={{
        comments,
        setComments,
        isLoading,
        setIsLoading,
        addItem,
        borrarItem,
      }}
    >
      {children}
    </ComentariosContexto.Provider>
  );
};

export default ComentariosContexto;
