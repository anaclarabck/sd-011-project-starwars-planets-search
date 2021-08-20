import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import './css/Table.css';

function App() {
  return (
    <PlanetsProvider>
      <header className="header-page">
        Star Wars Planets Search
      </header>
      <div>
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
