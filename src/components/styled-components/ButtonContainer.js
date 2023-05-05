import styled from "styled-components"

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    background: transparent;
    color: ${prop => prop.blue? "var(--lightBlue)": "var(--mainYellow)"};
    border: 1.5px solid var(--mainYellow);
    border-color: ${prop => prop.blue? "var(--lightBlue)": "var(--mainYellow)"};
    border-radius: 0.2rem;
    padding: 0.2rem 0.5rem;
    &:hover{
        background: ${prop => prop.blue? "var(--lightBlue)": "var(--mainYellow)"};
        color: ${prop => prop.blue? "var(--mainWhite)": "var(--mainDark)"};
    }
    &:focus{
        outline:none;
    }
`