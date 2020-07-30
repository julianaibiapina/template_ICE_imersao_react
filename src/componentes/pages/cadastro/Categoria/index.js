import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Ajuste = styled.div`
    width: 100%;
    height: 94px;

    @media(max-width: 800px) {
        height: 40px;
        justify-content: center;
        /* z-index: 4; */
    }
`;


function CadastroCategoria(){
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>

            <form>

                <label>
                Nome da Categoria:
                <input
                    type="text"
                />
                </label>

                <button>
                Cadastrar
                </button>
            </form>
            
            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;