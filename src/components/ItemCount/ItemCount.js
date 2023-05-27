import React, { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  const [cantidad, setCantidad] = useState (initial)

  const incremento = () => {
    if(cantidad < stock){
        setCantidad (cantidad + 1)
    }
  }

  const decremento = () => {
    if(cantidad > 1){
        setCantidad (cantidad - 1)
    }
  }
  
  
    return (
    <div className='counter'>
        <div className='controles'>
            <button className='boton' onClick={decremento}>-</button>
            <h4 className='numero'>{cantidad}</h4>
            <button className='boton' onClick={incremento}>+</button>
        </div>
        <div>
            <button className='boton' onClick={() => onAdd (cantidad)} disabled = {!stock}>Agregar</button>
        </div>
    </div>
  )
}

export default ItemCount
