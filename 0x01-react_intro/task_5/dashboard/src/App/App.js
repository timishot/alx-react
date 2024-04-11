import logo from '../assets/holborton_logo.jpg';
import './App.css';
import  { getFullYear, getFooterCopy } from '../utils/utils'

function App() {
  return (
    <div>
      <div className='App'>
        <div className="App-header">
          <img alt="logo" src={logo} className='App-logo' />
          <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
        </div>
        <div className='App-footer'>
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
