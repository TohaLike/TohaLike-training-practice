import './App.css';
import Navigation from './Navigation/Navigation';
import AccountingList from './AccountingList/AccountingList';
import TextField from './TextField/TextField';
import ToDoList from './ToDo/ToDoList';


// В <div className="App"> импортируются модули
function App() {
  return (
    <div className="App">
      <Navigation />
      <TextField />
      <AccountingList />
      <ToDoList />
    </div>
  );
}

export default App;

