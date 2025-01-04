import './App.css';
import Header1 from  './components/Header1';
import Middle from './components/Middle'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header1 />
        <Middle/>
        <main>
          <Routes>
            {/* Add your Route components here */}
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
