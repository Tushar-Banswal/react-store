import styled from "styled-components"
import { ProductContext } from "../../App"
import { ButtonContainer } from "../styled-components/ButtonContainer"
import { Link } from "react-router-dom"
import { useContext } from "react"

const Modal = () => {

    const {modalProduct, closeModal} = useContext(ProductContext);
    const {img, title, price} = modalProduct
  return (
    <ModelContainer>
        <div className="container">
            <div className="row">
                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                    <h5>item added to the cart</h5>
                    <img src={img} alt="product" className="img-fluid"/>
                    <h5>{title}</h5>
                    <h5 className="text-muted">price: <span>₹</span>{price}</h5>
                    <div className="container">
                        <Link to='/'>
                            <ButtonContainer blue
                                className="mx-2"
                                onClick={() => {closeModal()}}>
                                continue shopping
                            </ButtonContainer>
                        </Link>
                        <Link to='/cart' >
                            <ButtonContainer
                                onClick={() => {closeModal()}}>
                                go to cart
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </ModelContainer>
  )
}

const ModelContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;

export default Modal
