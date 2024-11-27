import { React, useContext } from 'react';
import ComentariosContexto from '../contexto/ComentariosContexto';
import ComentarioItem from './ComentarioItem';
import { AnimatePresence, motion } from 'framer-motion';

function ComentarioLista() {
  const { comments, isLoading } = useContext(ComentariosContexto);

  // Verificar si `comments` es un array y está vacío o si no está definido
  if (!comments || comments.length === 0) {
    return <p>No hay comentarios</p>;
  }

  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    <div className="comments">
      <AnimatePresence>
        <ul>
          {comments.map((comentario) => (
            <motion.div
              key={comentario.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ComentarioItem comentario={comentario} />
            </motion.div>
          ))}
        </ul>
      </AnimatePresence>
    </div>
  );
}

export default ComentarioLista;
