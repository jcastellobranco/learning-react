import './App.css';
import Navbar from "./components/Navbar";
import Contador from './components/Contador';
import Advertising from './components/Advertising';
import Counter from './components/Counter';
import MoviesList from './components/MoviesList';
import UFList from './components/UFList';
import { Route, Link, Switch, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <div>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/contact" >Contact</Link>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/contact" exact={true} element={<Contact />} />
      </Routes>


      <Navbar />

      <UFList />
      <Advertising title="Primeira Propaganda">
        <h4>Texto Principal da Propaganda</h4>
      </Advertising>
      <Counter initialNumber={1} />
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
