import React from 'react'
import CartItem from '../CartItem/CartItem'
function CartList({list}) {
  return (
    <>
        {list.map(item => {
            return(
                <CartItem key={item.id} item={item}/>
            )
        })}
      
    </>
  )
}

export default CartList
