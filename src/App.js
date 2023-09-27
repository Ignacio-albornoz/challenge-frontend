import React from 'react';

/*Styles*/
import './App.css';
import './globalStyles.css'

/*Components */
import { ListOfMachines } from './components/list-of-machines';
import { Layout } from './components/layout';


function App() {
  return (
    <div>
      <Layout />
      <ListOfMachines />
    </div>
    
  );
}

export default App;
