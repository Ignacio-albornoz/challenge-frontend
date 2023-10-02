import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'

/*Styles*/
import './App.css';
import './globalStyles.css'

/*Components */

import { MachinePage } from './pages/machine-page';
import { Home } from './pages/home'
import { Layout } from './components/layout'




function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/machine/:id' Component={MachinePage} />
          <Route path='*' Component={Home} />

        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
