import React from 'react'

const Header = ({titulo, autor, centro, ficha}) => {

    const headerStyles = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#045abc',
    },
    titleStyles = {
        color: "green"
    },
    autorStyles = {
        color: 'blue'
    },
    centroStyles = {
        color: 'red'
    },
    fichaStyles = {
        color: 'yellow'
    }




  return (
    <header style={headerStyles}>
        <div className='container'>
            <p style={titleStyles}>{titulo}</p>
            <p style={autorStyles}>Autor: {autor} </p>
            <p style={fichaStyles}>Ficha: {ficha}</p>
        </div>
    </header>
  )
}

export default Header