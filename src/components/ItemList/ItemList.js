import React from 'react'

export const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map(prod => <Item key = {prod.id}{...prod}/>)}
    </div>
  )
}

export default ItemList
