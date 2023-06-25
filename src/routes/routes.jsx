import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/index';
import Repositorio from '../pages/Repositorio/index';

import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Main} />
        <Route exact path='/repositorio/:repositorio' Component={Repositorio} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
