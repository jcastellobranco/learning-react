import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Contador from './components/Contador';
import Advertising from './components/Advertising';
import Counter from './components/Counter';
import MoviesList from './components/MoviesList';



function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Advertising title="Primeira Propaganda">
        <h4>Texto Principal da Propaganda</h4>
      </Advertising>
      <Counter initialNumber={0}/>
      <Contador />
      <MoviesList />
      <Advertising title="Segunda Propaganda">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Advertising>
    </div>
  );
}

export default App;
