
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransection from './components/AddTransection';

import  GlobalProvider  from './context/GlobalState';


function App() {
  return (
    <div className='content'>
      <GlobalProvider>
        <Header/>
        <div className='container'>
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransection/>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
