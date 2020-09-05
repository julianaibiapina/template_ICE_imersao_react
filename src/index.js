import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './componentes/pages/HomeICE';
import VideoAssistir from './componentes/pages/VideoAssistir';

// import Home from './componentes/pages/Home';

// desafio de criar essa página bonitinha
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/serie" component={VideoAssistir} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
