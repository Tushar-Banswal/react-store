import { ProductContext } from "../../App"
import CartColumn from "../CartColumn/CartColumn"
import CartList from "../CartList/CartList"
import CartTotal from "../CartTotal/CartTotal"
import EmptyCart from "../EmptyCart/EmptyCart"
import { useContext } from "react"

const Cart = () => {
  const {cart, pricing} = useContext(ProductContext);
  return (
    <div>
      {cart.length === 0? <EmptyCart /> : <>
      <h1 className='text-title text-center'>My Cart</h1>
      <CartColumn />
      <CartList list={cart}/>
      <CartTotal pricing={pricing}/>
      </>}
      
      
    </div>
  )
}

export default Cart
