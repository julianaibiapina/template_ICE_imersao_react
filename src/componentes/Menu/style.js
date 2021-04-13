import styled from 'styled-components';

export const LogoImage = styled.img`
    max-height: 38px;

    @media (max-width: 800px){
        max-height: 28px;
    }
`;

export const MenuWrapper = styled.nav`
    
    width: 100%;
    height: 58px;

    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--grayDark);
    border-bottom: 2px solid var(--primary);

    @media(max-width: 800px) {
        height: 40px;
        /* justify-content: center; */
    }
`;
