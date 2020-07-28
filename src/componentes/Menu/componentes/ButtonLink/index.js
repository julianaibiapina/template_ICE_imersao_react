import React from 'react';

function ButtonLink(props){ 
    // props é um objeto
    // children é o conteúdo da tag, lá onde ela é chamada  
    return (
        <a href={props.href} className={props.className}>
            {props.children} 
        </a>
    );
}

export default ButtonLink;