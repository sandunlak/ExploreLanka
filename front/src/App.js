import './App.css';
import Header1 from './components/Header1';
import Firstbar from './components/Firstbar'
import Middle from './components/Middle';
import Location from './components/location';
import Footer from './components/Footer';
import Jaffna from './components/Jaffna'; // Ensure this is default export
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header1 />
        <Firstbar/>
        <Middle />
        <Location />
        <main>
          <Routes>
            
            <Route path="/Jaffna" element={<Jaffna />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
