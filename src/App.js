import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Realisations from './views/Realisations';
import Blog from './views/Blog';

function App() {
  return (
    <div className="App">
      <Header/>
      <Blog />
    </div>
  );
}

export default App;
