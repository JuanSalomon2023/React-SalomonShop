import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({saludo}) => {
  const[productos, setProductos] = useState([])
  
  useEffect (() => {
    DatosProductos()
    .then (response =>{
        setProductos(response)
    })
    .catch (error => {
        console.error(error)
    })
  }, [])
  
  return (
    <div>
        <h1 className='saludo'>{saludo}</h1>
        <ItemList productos= {productos}/>
    </div>
  )
}

export default ItemListContainer
