import { Link } from "react-router-dom";
import { ButtonContainer } from "../styled-components/ButtonContainer";
import styled from "styled-components";
import logo from '../../logo.svg';
const Navbar = () => {
  return (
    <NavbarWarpper className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
        <Link to="/">
            <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link active">products</Link>
            </li>
        </ul>
        <Link to="/cart" className="ms-auto">
            <ButtonContainer>
                <span className="me-3">
                    <i className="fas fa-cart-plus" />
                </span>
                my cart
            </ButtonContainer>
        </Link>
    </NavbarWarpper>
  )
}

const NavbarWarpper = styled.nav`
    background:var(--mainDark);
    .nav-link{
        text-transform: capitalize;
        font-size: 1.05rem;
    }
`

export default Navbar
