import React from 'react'

function ComentarioCalificacion() {
  return (
    <ul className='rating'>
      <li key={1}>
            <input type="radio" id='num1' name='calificacion' value={1}/>
            <label htmlFor="num1">1</label>
      </li>
      <li key={2}>
            <input type="radio" id='num2' name='calificacion' value={2}/>
            <label htmlFor="num2">2</label>
      </li>
      <li key={3}>
            <input type="radio" id='num3' name='calificacion' value={3}/>
            <label htmlFor="num3">3</label>
      </li>
      <li key={4}>
            <input type="radio" id='num4' name='calificacion' value={4}/>
            <label htmlFor="num4">4</label>
      </li>
      <li key={5}>
            <input type="radio" id='num5' name='calificacion' value={5}/>
            <label htmlFor="num5">5</label>
      </li>
      <li key={6}>
            <input type="radio" id='num6' name='calificacion' value={6}/>
            <label htmlFor="num6">6</label>
      </li>
      <li key={7}>
            <input type="radio" id='num7' name='calificacion' value={7}/>
            <label htmlFor="num7">7</label>
      </li>
      <li key={8}>
            <input type="radio" id='num8' name='calificacion' value={8}/>
            <label htmlFor="num8">8</label>
      </li>
      <li key={9}>
            <input type="radio" id='num9' name='calificacion' value={9}/>
            <label htmlFor="num9">9</label>
      </li>
      <li key={10}>
            <input type="radio" id='num10' name='calificacion' value={10}/>
            <label htmlFor="num10">10</label>
      </li>
    </ul>
  )
}

export default ComentarioCalificacion
