import styled from 'styled-components';

export const LogoImage = styled.img`
    /* max-width: 168px; */
    max-height: 48px;

    @media (max-width: 800px){
        max-width: 48px;
    }
`;

export const MenuWrapper = styled.nav`
    
    width: 100%;
    height: 78px;

    /* position: fixed;
    z-index: 1; */
    /* top: 0;
    left: 0; */

    
    padding-top: 6px;
    padding-bottom: 5px;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--primary);
    border-bottom: 2px solid #14CCB9;

    @media(max-width: 800px) {
        height: 58px;
        justify-content: center;
        /* z-index: 4; */
    }
`;

