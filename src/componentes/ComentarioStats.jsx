import React from 'react'


const ComentarioStats = ({ comentarios }) => {
      // Calcular el número total de comentarios
      const totalComentarios = comentarios.length;
    
      // Calcular la calificación promedio
      const calificacionPromedio = totalComentarios > 0
        ? comentarios.reduce((acumulador, comentario) => 
            acumulador + comentario.calificacion, 0) / totalComentarios
        : 0;
    
      return (
        <div className='feedback-stats'>
          <h4>Comentarios: {totalComentarios}</h4> 
          <h4>Calificación Promedio: {calificacionPromedio.toFixed(1)}</h4>
        </div>
      );
    };
    
export default ComentarioStats
