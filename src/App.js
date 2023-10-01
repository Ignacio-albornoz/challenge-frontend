import React from 'react';

/*Styles*/
import './App.css';
import './globalStyles.css'

/*Components */
import { Layout } from './components/layout';
import { Home } from './pages/home';


function App() {
  return (
    <div>
      <Layout />
      <Home />
    </div>
    
  );
}

export default App;
