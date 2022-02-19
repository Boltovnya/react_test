import logo from './logo.svg';
import './App.css';
import TEST_VAR_NODE_SCOPE from 'notreact'

function App() {

  const TEST_VAR_REACT_SCOPE = process.env.REACT_APP_TEST_VAR;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><b>React Scoped Variable:</b> {TEST_VAR_REACT_SCOPE}</p>
        <p><b>Node Scoped Variable:</b>{TEST_VAR_NODE_SCOPE}</p>
      </header>
    </div>
  );
}

export default App;
