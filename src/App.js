import logo from './logo.svg';
import items from './items';
import Pokedex from './Pokedex';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className="App-title">Pokedex</h1>
        <Pokedex items={items}/>
    </div>
  );
}

export default App;
