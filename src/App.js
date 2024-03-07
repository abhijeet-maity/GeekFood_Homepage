import './App.css';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Aside from './components/Aside.js';
import Article from './components/Article.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Aside/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
