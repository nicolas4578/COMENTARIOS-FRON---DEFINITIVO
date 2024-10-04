import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/Comentarios';

function App() {

    const [comments, setComments] = useState(Comentarios)

    const titulo = "App de Comentarios";
    const Autor = "David Giron y Jose"
    const ficha = "2902093"
    const centro = "CGMLTI"
    const loading = false;
    const showComments = true;
    if (loading === true) return (<h1> Cargando comentarios.. </h1>)        
    
  return (
    <div className='container'>

        <Header titulo={titulo} autor={Autor} centro={centro} ficha={ficha}/>
        
        {showComments &&
            (
                <div className='comments'>
                    <h3> Comentarios: {Comentarios.length}</h3>
                    <ul>
                        { 
                            comments.map( comentario => 
                                <ComentarioItem 
                                    key={comentario.id}
                                    comentario={comentario.comentario}
                                    calificacion={comentario.calificacion}
                                />
                            )
                        }
                    </ul>
                </div>
            )
        }
 
    </div>
  )
}

export default App