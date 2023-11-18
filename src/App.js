import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Realisations from './views/Realisations';
import Blog from './views/Blog';
import Legal from './views/Legal';
import Services from './views/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services />
    </div>
  );
}

export default App;
