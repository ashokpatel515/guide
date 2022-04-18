import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpese/NewExpense';

const App = () => {

  return (
    <>
      <NewExpense />
      <Expenses  />
    </>
  );
}

export default App;
