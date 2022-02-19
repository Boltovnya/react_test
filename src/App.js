import logo from './logo.svg';
import './App.css';
import NotReact from './notreact';

function App() {

  const TEST_VAR_REACT_SCOPE = process.env.REACT_APP_TEST_VAR;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><b>React Scoped Variable:</b> {TEST_VAR_REACT_SCOPE}</p>
        <NotReact/>
      </header>
    </div>
  );
}

export default App;
