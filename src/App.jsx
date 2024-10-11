import {React, useState} from 'react'
import Header from './componentes/Header';
import ComentarioItem from './componentes/ComentarioItem';
import Comentarios from './data/Comentarios';
import ComentarioLista from './componentes/ComentarioLista';
import Card from './componentes/Card';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';


function App() {

    const [comments, setComments] = useState(Comentarios)

    const borrarItem= (id) =>{
      if(  window.confirm('¿Estas seguro que quieres borrar el comentario?')){
        //asignar nuevo estado a comments
        //filter:para quitar los comentarios
        //cuyo id concuerde con el parametro id
        setComments(comments.filter((c)=> c.id !== id))     
      }
      
    }
    const titulo = "App de Comentarios";
    const Autor = "David Giron y Jose"
    const ficha = "2902093"
    const centro = "CGMLTI"
    const loading = false;
    if (loading === true) return (<h1> Cargando comentarios.. </h1>)        
    
  return (
    <div className='container'>

        <Header titulo={titulo} autor={Autor} centro={centro} ficha={ficha}/>
        <ComentarioForm/>
        <ComentarioStats comentarios={comments}/>
        <ComentarioLista comments={comments} handleDelete={borrarItem} />
    </div>
  )
}

export default App