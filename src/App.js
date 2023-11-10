import logo from './logo.svg';
import './App.css';
import InsertPumpPage from './pages/InsertPumpPage';
import WarningPage from './pages/WarningPage';
import IssuesPage from './pages/IssuesPage';


function App() {
  return (
    <div>
      <InsertPumpPage/>
      <WarningPage/>
      <IssuesPage/>
    </div>
  );
}

export default App;
