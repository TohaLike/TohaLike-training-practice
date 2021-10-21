import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import AccountingList from './AccountingList/AccountingList';
import TaskList from './TaskList/TaskList';

// В <div className="App"> импортируются модули
function App() {
  return (
    <div className="App">
      <Navigation/>
      <AccountingList/>
      <TaskList/>
    </div>
  );
}

export default App;

