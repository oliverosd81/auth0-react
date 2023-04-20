import logo from './logo.svg';
import './App.css';
import { LoginButton } from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Auth0 React App</h1>
        <h3>The Future of Authentification</h3>
        <LoginButton />
      </header>
    </div>
  );
}

export default App;
