import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../App';

function CartTotal({pricing}) {
    const {subTotal, total, tax} = pricing;
    const {clearCart} = useContext(ProductContext);

  return (
    <>
      <div className='container'>
        <div className='row'>
            <div className='col-10 mt-2 mx-sm-5 mx-md-auto col-lg-12 text-capitalize' style={{textAlign:'right'}}>
                <Link to="/">
                    <button className='btn btn-outline-danger text-uppercase mb-3 px-5' onClick={() => clearCart()}>clear cart</button>
                </Link>
                <h5>
                    <span className='text-title'>
                        subTotal: <span>₹</span> {subTotal}
                    </span>
                </h5>
                <h5>
                    <span className='text-title'>
                        tax: <span>₹</span> {tax}
                    </span>
                </h5>
                <h5>
                    <span className='text-title'>
                        Total: <span>₹</span> {total}
                    </span>
                </h5>
            </div>
        </div>
      </div>
    </>
  )
}

export default CartTotal
