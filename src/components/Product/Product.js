import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../../App";
import { useContext } from "react";

const Product = ({info}) => {

  const {handleDetails, addToCart, openModal} = useContext(ProductContext);
  const {id, title, img, price, inCart} = info;

  return (
    <ProductWrapper className="col-9 mx-auto my-2 col-md-6 col-lg-3">
      <div className="card my-2">
        <div className="img-container p-5" onClick={()=>{handleDetails(id)}}>
          <Link to="details">
            <img src={img} alt="product" className="card-img-top mb-5"/>
          </Link>
          <button disabled={inCart} className="cart-btn" onClick={() => {
            addToCart(id);
            openModal(id);
          }}>
            {inCart ? (<p className="mb-0" disabled>In Cart</p>) : (<i className="fas fa-cart-plus"/>)}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="mb-0">{title}</p>
          <p className="mb-0 text-primary"><span>₹</span>{price}</p>         
        </div>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  .card {
    border-color:transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  .img-container {
    position:relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;
  }
  &:hover {
    .card{
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247,247,247);
    }
    .card-img-top {
      transform: scale(1.2);
    }
    .cart-btn {
      transform: translate(0,0);
    }
  }
  .cart-btn:hover {
    color:var(--mainBlue);
    cursor:pointer;
  }
  
`

export default Product;