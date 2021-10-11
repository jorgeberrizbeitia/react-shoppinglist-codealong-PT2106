import React from 'react'

const containerStyle = {
  border: "yellow 2px solid",
  marginBottom: "10px"
}

function Item( { potato } ) {
  return (
    <div style={containerStyle}>
      <p>name: {potato.name}</p>
      <p>price: {potato.price}</p>
    </div>
  )
}

export default Item
