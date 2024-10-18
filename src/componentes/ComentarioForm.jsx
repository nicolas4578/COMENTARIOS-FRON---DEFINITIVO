import {React, useState} from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'

const ComentarioForm = ({handleAdd}) => {

      const[text, setText] = useState('')
      const[calificacion, setCalificacion] = useState(0)

      const handleTextChange = (e) => {
            setText( e.target.value )
      }

      const hanleSubmit = (e) => {
            e.preventDefault()
            //crear el objeto comentario
            const newComentario = {
                  comentario: text,
                  calificacion: calificacion
            }
            handleAdd(newComentario)
      }

  return (
    <Card>
      <form action='' onSubmit={ hanleSubmit } >
            <ComentarioCalificacion select={(calificacion) => {setCalificacion(calificacion) }} />
            <div className='input-group'>
                  <input type='text' value={text} onChange= {handleTextChange} placeholder='Ingrese su comentario aqui' />
                  <button type="submit">
                        Guardar
                  </button>
            </div>
      </form>
    </Card>
  )
}

export default ComentarioForm