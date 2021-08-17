import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Nav from './component/nav_components/nav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
