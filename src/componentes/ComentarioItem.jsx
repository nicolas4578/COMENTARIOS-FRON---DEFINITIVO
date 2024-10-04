import {React, useState} from 'react'

const ComentarioItem = ({comentario, calificacion}) => {
    
    //manejo del estado de un comentario 
    //comentario y calificaion como atributos 
    //mediante el uso de estados 

    const [comment, setComment ] = useState(comentario)
    const [rating, setRating] = useState(calificacion)

    const cambiarRating = () =>{
        setRating((prev) => prev + 1 )
    }

  return (
    <div className='card'>
        <div className='num-display'>{rating}</div>
        <div className='text-display'>{comment}</div>
        <button onClick={cambiarRating}>
            Cambiar Calificacion
        </button>
    </div>
  )
}

export default ComentarioItem