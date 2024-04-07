import logo from './holborton_logo.jpg';
import './App.css';
import  { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    //working on the dashboard
    <div className='App'>
      <div className="App-header">
        <img alt="logo" src={logo} className='App-logo' />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <div className='login'>
          <div>
            <label htmlFor="email" className='m-3'>Email:</label>
            <input
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password" className='m-3'>Password:</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <button >OK</button>
        </div>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
