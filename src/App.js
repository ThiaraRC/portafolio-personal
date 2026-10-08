import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import BarraNavegacion from './componentes/BarraNavegacion';
import Inicio from './paginas/Inicio';
import Proyectos from './paginas/Proyectos';
import Noticias from './paginas/Noticias';
import Contacto from './paginas/Contacto';
import DemoTareas from './paginas/DemoTareas';

function App() {
  return (
    <BrowserRouter>
      <BarraNavegacion />

      <Route exact path="/" component={Inicio} />
      <Route path="/proyectos" component={Proyectos} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/demo-tareas" component={DemoTareas} />
    </BrowserRouter>
  );
}

export default App;
