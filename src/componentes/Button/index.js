import styled from "styled-components"

const Button = styled.a`
    color: var(--white);
    /* border: 1px solid var(--white); */
    box-sizing: border-box;

    padding: 8px 16px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    outline: none;
    /* border-radius: 5px; */
    text-decoration: none;
    display: inline-block;

    transition: opacity .3s;

    cursor: pointer;

    &:hover,
    &:focus {
     /* background-color: #339999; */
     color: var(--primary);
     
    }

    @media(max-width: 800px){
        padding: 4px 8px;
        font-size: 12px;
        /* position:fixed;
        left: 0;
        right: 0;
        bottom: 0; */

        /* background-color: var(--primary);
        color: var(--white);
        border: 0;
        border-radius: 0;
        outline:0;
        text-align: center; */



    }

`;

export default Button;