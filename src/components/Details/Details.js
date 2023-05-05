import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../App";
import { ButtonContainer } from "../styled-components/ButtonContainer";

const Details = () => {
  const {detailProduct, addToCart, openModal} = useContext(ProductContext);
  const {id, title, img, price, inCart, company, info} = detailProduct;
  return (
    <div className="continer py-5 mx-auto">
      <div className="row mx-auto">
        <div className="col-10 mx-auto text-center text-blue">
          <h1>{title}</h1>
        </div>
        <div className="col-10 text-center col-md-6 my-5">
          <img src={img} className="img-fluid" alt="product"/>
        </div>
        <div className="col-10 col-md-6 my-5 mx-auto">
          <h5 className="text-blue text-uppercase text-muted mt-3 mb-2">made by: {company}</h5>
          <h6 className="text-blue text-uppercase">price: <span>₹</span>{price}</h6>
          <p className="text-capitalise font-weight-bold mt-3 mb-0 text-muted lead">{info}</p>
          <div className="text-capitalise mt-3">
            <Link to='/' className="me-3">
              <ButtonContainer blue>
                back to products
              </ButtonContainer>
            </Link>
            <ButtonContainer 
            onClick={()=>{
              addToCart(id);
              openModal(id);
            }}
            disabled={inCart? true: false} >
              {inCart? <span>in cart</span>: <span className="mb-0">add to cart</span>}
            </ButtonContainer>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Details
