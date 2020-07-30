import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './componentes/pages/Home';
import CadastroVideo from './componentes/pages/cadastro/Video';
import CadastroCategoria from './componentes/pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route} from 'react-router-dom';



// desafio de criar essa página bonitinha
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/cadastro/video' component={CadastroVideo} />
            <Route path='/cadastro/categoria' component={CadastroCategoria} />
            <Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
