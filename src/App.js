import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Header from './components/Header';
import FiltersList from './components/FiltersList';
import './App.css';
import OrderSelector from './components/OrderSelector';

function App() {
  return (
    <Provider>
      <main>
        <Header />
        <OrderSelector />
        <FiltersList />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
