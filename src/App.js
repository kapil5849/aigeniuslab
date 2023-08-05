import './App.css';
import Header from './components/Header';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
