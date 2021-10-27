import './App.css';
import Navigation from './Navigation/Navigation';
import AccountingList from './AccountingList/AccountingList';
import TextField from './TextField/TextField';

// В <div className="App"> импортируются модули
function App() {
  return (
    <div className="App">
      <Navigation/>
      <TextField/>
      <AccountingList/>
    </div>
  );
}

export default App;

