import React, { useState } from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormField from '../../../FormField';

export const Ajuste = styled.div`
    width: 100%;
    height: 94px;

    @media(max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;


function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais); // useState() retorna o valor, e uma função que permite alterar esse valor

    function setValue(chave, valor){
        // chave é variável, ou seja, é dinâmico mesmo que seja um atributo por isso usa o recurso do JS []
        setValues({
            ...values,
            [chave]: valor,
        })
    }

 
    function handleChange(infosDoEvento) {
        
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
      }

    return (
        <PageDefault>
            <h1>Cadastro de categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault(); // o submit default ele faz com reload, agora a gnt quer que ele submeta o form sem dar reload
                console.log('Tentou enviar o form, né?');

                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label='Nome da categoria:'
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />
                
                <FormField
                    label='Descrição:'
                    type='textarea'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label='Cor:'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name='descricao'
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                    
                {/* <div>
                <label>
                    Cor:                   
                    <input
                        type="color"
                        value={values.cor}
                        name="cor"
                        onChange={handleChange}
                    />
                </label>
                </div> */}

               
                <button>
                Cadastrar
                </button>
            </form>


            <ul>
                
                {categorias.map((categoria, indice) => {
                   return (
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                   ) 
                })}
                
            </ul>
                        
            
            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;