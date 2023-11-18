import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Realisations from './views/Realisations';

function App() {
  return (
    <div className="App">
      <Header/>
      <Realisations />
    </div>
  );
}

export default App;
