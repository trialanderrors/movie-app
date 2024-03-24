import logo from './logo.svg';
import './App.css';
import MovieApp from './Components/MovieApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <MovieApp/>
    </div>
  );
}

export default App;
